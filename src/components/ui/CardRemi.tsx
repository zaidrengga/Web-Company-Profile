"use client"

import React, { forwardRef } from 'react'
import cardRemi from '@/assets/image/card-remi.jpg'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface CardRemiProps {
    id: string | number;
    image: string;
    title: string;
    description?: string;
    position: string;
}

const CardRemi = forwardRef<HTMLDivElement, CardRemiProps>(({ id, image, title, description, position }, ref) => {
    useGSAP(() => {
        gsap.to(`.gsap-animate-bronce`, {
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            
        })
    })

    return (
        <div className='relative w-full h-full' ref={ref} id={`card-${id}`}>
            <div className="relative w-full h-full transform-3d gsap-animate-bronce" >
                <div className='absolute inset-0  w-full h-full backface-hidden rounded-lg overflow-hidden flip-card-front'>
                    <Image src={cardRemi} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className='absolute inset-0  w-full h-full backface-hidden rounded-lg overflow-hidden rotate-y-[180deg] bg-gray-300 border-4 border-white text-black flip-card-back'>
                    <img src={image} alt={title} className="w-full aspect-square object-cover rounded-lg" />
                    <div className="flex flex-col gap-1 p-2 items-center justify-center">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="font-semibold">{position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default CardRemi