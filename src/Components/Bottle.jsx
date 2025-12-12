import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Bottle = ({bottle,handlePurchaseCount,handleProductsAvailable,productsAvailable}) => {
    const {img,name,seller,stock,price,ratings}=bottle
    const [purchased,setPurchased]=useState(false)

    const handlePurchase=()=>{
        setPurchased(true);
        if(purchased && productsAvailable>0){
            alert("Product already purchased!")
        }else{
            if(productsAvailable>0){
                notify();
                handlePurchaseCount(bottle);
                handleProductsAvailable();
            }else{
                alert("Sorry! No more product available in our store.")
            }
        }
    }

    function notify(){
        toast("Product purchased successfully!")
    }


    return (
        <div className='flex flex-col gap-3 items-center font-bold text-xl border-3
             border-green-500 w-95 rounded-2xl pb-5' style={{background: purchased ? "grey" : "white"}}>
            <span><img className='h-75 w-95 rounded-2xl' src={img} alt="A picture of a water bottle" /></span>
            <span>Name: {name}</span>
            <span>Seller: {seller}</span>
            <span>Stock: {stock}</span>
            <span>Price: $ {price}</span>
            <span>Ratings: {ratings}</span>
            <button onClick={handlePurchase} className="btn w-50 h-12.5 rounded-3xl font-bold text-[1.1em]" style={{background: purchased ? "powderblue" : "tan"}}>{purchased ? "Purchased" : "Purchase"}</button>
        </div>
    );
};

export default Bottle;