'use client'
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function Sun(){

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {

        gsap.to('.sun', {
            opacity: 1,
        })
        let rays = document.getElementsByClassName('ray');
        gsap.utils.toArray(rays).forEach((target, index) => {
            gsap.set(target as HTMLElement, {
                rotate: randomIntFromInterval(-90, 90)
            });
            gsap.to(target as HTMLElement, {
                duration: 20,
                yoyo: true,
                repeat: -1,
                rotate: randomIntFromInterval(-90, 90),
                stagger: 1
            });
        }); // end foreach
    }, []);

    return(
        <div className="sun">
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
            <div className="ray">
                <Image 
                    src='/ray.png'
                    width={80}
                    height={553}
                    className=''
                    alt='sunray'
                    priority
                />
            </div>
        </div>
    )
}