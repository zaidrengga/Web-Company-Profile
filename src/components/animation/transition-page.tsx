"use client"

import { animatePageIn, animatePageOut } from '@/utils/transition-animate'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import SmoothScrollProvider from './smoth-scroll';
import { useGlobalAnimations } from '@/hooks/useGlobalAnimations';

export const TransitionAnimate = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        animatePageIn()
    }, []);
    useGlobalAnimations();
    return (
        <SmoothScrollProvider>
            <div id="banner-1" className="min-h-screen w-1/4 fixed top-0 left-0 bg-black z-10 border-t border-b"></div>
            <div id="banner-2" className="min-h-screen w-1/4 fixed top-0 left-1/4 bg-black z-10 border-t border-b"></div>
            <div id="banner-3" className="min-h-screen w-1/4 fixed top-0 left-2/4 bg-black z-10 border-t border-b"></div>
            <div id="banner-4" className="min-h-screen w-1/4 fixed top-0 left-3/4 bg-black z-10 border-t border-b"></div>
            <div id='logo-transition-page' className="fixed w-full h-full top-0 left-0 right-0 z-20 flex items-center justify-center">
                <span className='text-4xl font-bold text-indigo-500 split-text-repeat'>Lumino<span className='text-white'>Tech</span></span>
            </div>
            {children}
        </SmoothScrollProvider>
    )
}

interface TransitionLinkProps {
    href: string;
    label: string;
}

export const TransitionLink = ({ href, label }: TransitionLinkProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleCklik = () => {
        if (pathname !== href) {
            animatePageOut(href, router);
        }
    }

    return (
        <button onClick={handleCklik} className="px-3 py-2 text-white hover:bg-gray-700 rounded-md">{label}</button>
    )
}