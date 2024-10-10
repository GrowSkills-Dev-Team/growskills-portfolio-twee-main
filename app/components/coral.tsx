'use client'
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Coral(){
    useEffect(() => {
        let el = document.getElementById('turbulence');

        const rippleTl = gsap.timeline({
            ease: "linear",
            repeat: -1,
            yoyo: true
        });

        rippleTl.to(el, 10, {
        attr: { baseFrequency: '0 0' }
        })
    });

    return(
        <>
            <div className="noise-displacement">
                <svg>
                    <filter id="noise" x='0%' y='0%' width='100%' height='100%'>
                        <feTurbulence baseFrequency="0.1 0.2" result="NOISE" numOctaves="1" id="turbulence" />
                        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="2"></feDisplacementMap>
                    </filter>
                </svg>
            </div>
            
            <div className="coral-image coral-left">
                <Image 
                    src="/coral.png"
                    width={600}
                    height={311}
                    className=''
                    alt='Coral image'
                    priority
                />
            </div>
            <div className="coral-image coral-right">
                <Image 
                    src="/coral.png"
                    width={600}
                    height={311}
                    className=''
                    alt='Coral image'
                    priority
                />
            </div>
        </>
    )
}