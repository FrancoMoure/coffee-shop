'use client'
import React from "react"

const SecondHero = () => {
    return(
        <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
            

           

            <div className="absolute z-[20] bottom-[10px] px-[5px]">
                <div className="cursive text-[50px] font-medium text-center text-white">
                    Coffee is our passion
                </div>
            </div>

            <div className="w-full flex items-start justify-center absolute">
                <video 
                loop
                muted
                autoPlay
                playsInline
                preload="false"
                className="w-full h-auto"
                src="/coffee12.webm"
                />
            </div>
        </div>
    )
}

export default SecondHero 

