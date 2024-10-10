'use client'
import Project from '../components/project/project-overview-item';
import Cta from '../components/cta';
import gsap from 'gsap';
import { useEffect } from "react";
import HeroTitle from '../components/herotitle';

export default function Page(){
    
    useEffect(() => {
      
      gsap.to('.hero-title', {
        duration: 0.5,
        opacity: 1,
        scale: 1,
      });

    })
    

    return (
      <>
      <HeroTitle className='hero-title with-margin'>
        <h1 className='hero'>Bekijk onze<br/>projecten</h1>
      </HeroTitle>

      <section className="project-overview content-grid go-home">
        <Project showLastOnly={false} />
        <svg className="svgclipWrap__clippath" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1 1" preserveAspectRatio='none'> 
          <defs> 
              <clipPath id="svgPath" clipPathUnits="objectBoundingBox"> 
                  <path d="M0.01,0.017 C0.01,0.017,0.006,0.243,0.003,0.327 C0,0.408,0.01,0.631,0.01,0.678 C0.011,0.832,0.004,0.971,0.003,0.982 V1 C0.003,1,0.378,1,0.474,1 C0.512,1,0.999,1,0.999,1 S1,0.696,0.998,0.519 C0.986,0.301,0.999,0.007,0.999,0.007 S0.69,0,0.409,0.023 C0.313,0.031,0.01,0.017,0.01,0.017"></path> 
              </clipPath>
          </defs>
        </svg>

      </section>
      
      <Cta />
      
      </>
    );
}