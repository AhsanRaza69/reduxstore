import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Paybutton = ({ item }) => {
    const { cardProducts } = useSelector((state) => state.card);

   

    const ClickHandler = () => {
        axios
        .post("http://localhost:4000/stripe/create-checkout-session", {
            item,
                // userId: cardProducts.id,
            }).then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url;
                }
            })
            .catch((err) => console.log("error", err));
    };

    return (
        <div>
            <button
                onClick={ClickHandler}
                className='bg-black font-semibold my-2 hover:bg-amber-700 transition-colors duration-300 text-white px-12 py-4 w-full'
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Paybutton;
