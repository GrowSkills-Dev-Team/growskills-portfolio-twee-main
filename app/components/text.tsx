'use client';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Link from "next/link"
import Snail from './snail';
export default function Text(){

    useEffect(() => {
      let mm = gsap.matchMedia();

      gsap.to('.text-columns-animate-text', {
        duration: 1,
        y: 0
      })

      mm.add("(max-width: 768px)", () => {
        gsap.set(".text-columns-animate-text .text-columns-title, .text-columns-animate-text .text-columns-text", {
          x: 0,
          opacity: 1
        })
      })

      mm.add("(min-width: 769px)", () => {
        gsap.to(".text-columns-animate-text .text-columns-title, .text-columns-animate-text .text-columns-text", {
          duration: 2,
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".text-columns-animate-text",
            start: "top bottom",
            end: "bottom 90%",
            scrub: true
          }
          
        })

        // gsap.to(".snail", {
        //   duration: 2,  
        //   x: 100,
        //   scrollTrigger: {
        //     trigger: ".snail",
        //     start: "top bottom",
        //     end: "bottom 70%",
        //     scrub: true
        //   }
        // })
      })
 
    }, []) // end useEffect

    return(
        <section className="text-columns content-grid with-margin margin-top-none text-columns-animate-text go-home">
            <div className="text-columns-wrapper text-container">
                {/* <Snail /> */}
                <div className="text-columns-title">
                    <h2>what you<br/>need is what<br/>you get</h2>
                </div>
                <div className="text-columns-text">
                    <p>Bij Growskills begrijpen we dat designers de essentie van een verhaal vastleggen in super gave ontwerpen, soms zelfs heel complex. Hier worden wij warm van en gaan in de startblokken staan. <br/><br/>Wij zijn er om deze ontwerpen te realiseren in een werkende website. Er is niets te gek voor ons, wij houden van een uitdaging. Jouw wensen zijn leidend en onze prioriteit. Hoe? Door mee te bewegen. Op jouw ritme, met onze talenten.</p>
                    <div className="btn-center"><Link href="/projecten" className="btn">bekijk projecten</Link></div>
                </div>
            </div>
        </section>
    )
}