const express = require("express");
const app = express()  ;
const  Stripe  = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

  const line_items = req.body.item.map((item)=>{
    return{
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.img],
          metadata:{
            id: item.id
          }
        
        },
        unit_amount:  item.price * 100,
      },
      quantity: item.quantity,
    }
  })
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "KE","PA"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
      line_items,
      
      
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/shop`,
    });

    res.send({ url: session.url });
  // } catch (error) {
  //   console.error("Error creating checkout session:", error);
  //   res.status(500).send({ error: "An error occurred while creating the checkout session." });
  // }
});

// app.use('/api', router); // Mount the router under '/api'

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Running on port ${PORT}`));

module.exports = router;
