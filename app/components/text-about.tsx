'use client'

import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Link from "next/link"

export default function TextAbout(){

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(max-width: 768px)", () => {
            gsap.set(".text-columns-animate-about .text-columns-title, .text-columns-animate-about .text-columns-text", {
              x: 0,
              opacity: 1
            })
        })

        mm.add("(min-width: 768px)", () => {
            gsap.to(".text-columns-animate-about .text-columns-title, .text-columns-animate-about .text-columns-text", {
            duration: 2,
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".text-columns-animate-about",
                start: "top bottom",
                end: "bottom 60%",
                scrub: true
            }
            })
        })
    
         
      }, []) // end useEffect
      
    return(
        <section className="text-columns content-grid with-margin text-columns-animate-about">
            <div className="text-columns-wrapper text-container">
                <div className="text-columns-title">
                    <h2>where we<span></span> are makes<span></span> an impact</h2>
                </div>
                <div className="text-columns-text">
                    <p>Growskills zet zich in voor jonge Mozambikanen door hen op te leiden tot webdevelopers en hen te trainen in zowel technische als soft skills. Op deze manier bieden we niet alleen kansen, maar creëren we ook banen in Nampula, Mozambique. Dit is de impact die we willen maken!</p>
                    <div className="btn-center"><Link href="/ons-unieke-verhaal" className="btn">lees meer</Link></div>
                </div>
            </div>
        </section>
    )
}