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
        })  
        gsap.to(".hero-text", {
            duration: 2,
            opacity: 1,
            scale: 1
        })   
    }, []) // end useEffect

    return(
        <>
        <HeroTitle className='hero-title margin-bottom-small'>
            <h1>ons unieke<br/>verhaal</h1>
        </HeroTitle>
        
        <section className='hero-text text-container go-home'>
            <p>Growskills zet zich in voor jonge Mozambikanen door hen op te leiden tot webdevelopers en hen te trainen in zowel technische als soft skills. Op deze manier bieden we niet alleen kansen, maar creëren we ook banen in Nampula, Mozambique. Dit is de impact die we willen maken!</p>
            <p>Ook zien we het als een meerwaarde dat Nederlandse bedrijven kunnen samenwerken met een bedrijf in Mozambique op basis van gelijkwaardigheid, zo creëren wij samen een win-win. Wil je meer weten over onze missie of direct impact maken in Mozambique? Laat het ons weten; we delen graag onze passie en zoeken de samenwerking.</p>
        </section>
        <Cta />
        </>
    )
}