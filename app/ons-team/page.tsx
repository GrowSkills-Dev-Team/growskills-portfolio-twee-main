'use client'
import gsap from 'gsap';
import { useEffect } from 'react';
import Team from '../components/team';
import Cta from '../components/cta';
import HeroTitle from '../components/herotitle';
export default function OurStory(){
    useEffect(() => {
        gsap.to(".hero-title", {
            duration: 2,
            opacity: 1,
            scale: 1
        }); 
    }, []) // end useEffect

    return(
        <>
        <HeroTitle className='hero-title margin-bottom-small'>
            <h1>ons team</h1>
        </HeroTitle>
        
        <Team />
        <Cta />
        </>
    )
}