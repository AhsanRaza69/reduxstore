const express = require("express");
const cors = require("cors");

const stripe = require("./Routes/Stripe");
// const productsRoute = require("./routes/products");

// const products = require("./products");`

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());  

app.use("/stripe",stripe); 
// app.use("/api/products", productsRoute);


app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

// app.get("/products", (req, res) => {
//   res.send(products);
// });

// const uri = process.env.DB_URI;
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});













// const express = require("express")
// const app = express()
// require("dotenv").config()
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// const bodyParser = require("body-parser")
// const cors = require("cors")

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.use(cors())

// app.post("/payment", cors(), async (req, res) => {
// 	let { token={}, amount, id } = req.body

//   const {id:customerId} = await stripe.customer.create({
//     email:token.email,
//     sorce:token.id
//   }).catch(e=>{
//     console.log(e)
//     return null
//   })


// 	try {
// 		const payment = await stripe.paymentIntents.create({
// 			amount,
// 			currency: "USD",
// 			description: "Spatula company",
//       customer:customerId,
// 			payment_method: id,
// 			confirm: true
// 		})
// 		console.log("Payment", payment)
// 		res.json({
// 			message: "Payment successful",
// 			success: true
// 		})
// 	} catch (error) {
// 		console.log("Error", error)
// 		res.json({
// 			message: "Payment failed",
// 			success: false
// 		})
// 	}
// })

// app.listen(process.env.PORT || 4000, () => {
// 	console.log("Sever is listening on port 4000")
// })