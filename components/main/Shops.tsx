import React from "react";
import ShopCard from '../sub/ShopCard'

const Shops = () => {
    return(
        <div className="flex flex-col items-center justify-center py-20" id="shops">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Our Stores around Spain
            </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ShopCard
                src='/shop5.jpg'
                title='Shops in Sevilla.'
                description= 'We have 5 shops in the south!'
                />

                <ShopCard
                src='/shop2.jpg'
                title='Shops in Barcelona.'
                description= 'One shop in the heart of Barcelona!'
                />


                <ShopCard
                src='/shop4.jpg'
                title='Shops in Madrid.'
                description= 'We have 20 shops in the capital city!'
                />
            </div>
        </div>
    )
}

export default Shops

