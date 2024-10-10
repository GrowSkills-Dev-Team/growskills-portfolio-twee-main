'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

import HeroTitle from '@/app/components/herotitle';
import Project from '@/app/components/project/project-overview-item';
import Text from '@/app/components/text';
import TextAbout from '@/app/components/text-about';
import Cta from '@/app/components/cta';

export default function Home(){
  const navigate = useRouter();

  useEffect(() => {
    
    gsap.to(".hero-title", {
      opacity: 1,
      scale: 1,
      duration: 2
    })

    gsap.to(".hero-title", {
      duration: 2,
      // scale: 1,
      y: -200,
      scrollTrigger: {
        trigger: ".hero-title + section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

     
  }, []) // end useEffect

  const handleNavigate = () => {
    navigate.push("/projecten");
  };

  const onClick = () => {

    gsap.to('.go-home', {
      duration: 0.5,
      y: '100%',
      opacity: 0
    })
    
    gsap.to('header', {
      duration: 0.5,
      y: '-250%',
      opacity: 0
    })
    gsap.to(".hero-title", {
      duration: 0.5,
      y: "-200%",
      opacity: 0,
      onComplete: handleNavigate,
    });
  };

  const handleNavigateStory = () => {
    navigate.push("/ons-unieke-verhaal");
  };
  
  const onClickStory = () => {

    gsap.to('.go-home', {
      duration: 0.5,
      y: '100%',
      opacity: 0
    })

    gsap.to('header', {
      duration: 0.5,
      y: '-250%',
      opacity: 0
    })

    gsap.to(".hero-title", {
      duration: 0.5,
      y: "-200%",
      opacity: 0,
      onComplete: handleNavigateStory,
    });
  };

  return (
    <>
      <HeroTitle className='hero-title hero-title-home'>
          <h1>wannahave <br/> websites voor <br/> designers</h1>
          <div className="btn-center">
            <button onClick={onClick} className="btn">bekijk projecten</button>
            <button onClick={onClickStory} className="btn-secondary">ons verhaal</button>
          </div>
      </HeroTitle>
      
      <Text />
      
      <section className="project-overview content-grid">
        <Project showLastOnly={true} />
      </section>
      
      <TextAbout />
      
      <Cta />
    </>
  )
}