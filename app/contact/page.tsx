'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useState, useEffect } from "react";
import Image from "next/image";
import HeroTitle from "@/app/components/herotitle";
export default function Contact(){
    useEffect(() => {
        gsap.to('.cta', {
            duration: 1,
            opacity: 1,
            y: 0
        })
        gsap.to(".hero-title", {
            duration: 2,
            opacity: 1,
            scale: 1
        })  
        gsap.to(".hero-text", {
            duration: 2,
            opacity: 1,
            scale: 1
        })   
    });

    const [state, setState] = useState({
        Whatsapp: '',
    });
    
    const handleChange = (e : any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <>
        <HeroTitle className="hero-title margin-bottom-small">
            <h1>neem gerust <br/>contact met<br/>ons op</h1>
        </HeroTitle>

        <section className="cta cta-contact  text-columns content-grid with-margin go-home">
            <div className="text-columns-wrapper text-container">
                <div className="text-columns-title">
                    <Image src="/arie-web-duotone.png" width={400} height={400} alt='Coral image' />
                </div>
                <div className="text-columns-text">
                    <p>Heb je een vraag of heb je meer informatie nodig? Stuur dan even een appje naar Arie. Vul hieronder in wat je wilt vragen en verstuur het direct via Whatsapp.</p>
                    <div className="text-columns-text-whatsapp">
                        <input type="text" name="Whatsapp" placeholder="Bijv: Hoi ik wil een website!" value={state.Whatsapp} onChange={handleChange} />
                        <a href={"https://api.whatsapp.com/send?phone=258848990989&text=" + `${state.Whatsapp}`} target="_blank" className="btn whatsAppCta">verstuur via Whatsapp</a>
                    </div>
                    <div className="text-columns-text-contact">
                        <Image src="/arie-web-duotone.png" width={200} height={200} alt='Coral image' />
                        <div className="text-columns-text-contact-text">
                            <h4>liever mailen of bellen?</h4>
                            <p>mail: arie [at] growskills.nl <br/>bel: +085 369 5042</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}