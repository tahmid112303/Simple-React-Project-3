import React, { use, useState } from 'react';
import Bottle from './Bottle';

const Bottles = ({userPromise}) => {
    const bottles=use(userPromise);
    const [purchaseCount,setPurchaseCount]=useState([]);
    const [productsAvailable,setProductsAvailable]=useState(bottles.length);

    const handlePurchaseCount=(newBottle)=>{
        const numberOfBottles=[...purchaseCount,newBottle];
        setPurchaseCount(numberOfBottles);
    }

    function handleProductsAvailable(){
        setProductsAvailable(productsAvailable-1);
    }

    return (
        <div>
            <span className='flex justify-center text-4xl font-semibold'>Number of Bottles Available: {productsAvailable}</span>

            <div className='text-3xl font-semibold mt-6 text-center'>Number of Bottles Purchased: {purchaseCount.length}</div>

            <div className='grid grid-cols-3 gap-10 mx-auto w-fit mt-12'>
                {bottles.map(bottle=><Bottle 
                bottle={bottle}
                handlePurchaseCount={handlePurchaseCount}
                productsAvailable={productsAvailable}
                handleProductsAvailable={handleProductsAvailable}
                key={bottle.id}></Bottle>)}
            </div>
        </div>
    );
};

export default Bottles;