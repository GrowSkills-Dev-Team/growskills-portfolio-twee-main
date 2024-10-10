'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Cta from "@/app/components/cta";
import HeroTitle from "@/app/components/herotitle";

gsap.registerPlugin(ScrollTrigger);

const dataUrl = 'https://wp.growskills.nl//wp-json/wp/v2/projects?acf_format=standard';

const ProjectDetail = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(dataUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const myProject = data.find((project) => project.slug.toString() === slug);
                setProject(myProject);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProject();
        }
    }, [slug]);

    useEffect(() => {
        if (project) {
            gsap.set('.cta, footer', {
                opacity: 1
            });

            gsap.to('.hero-title', {
                duration: 1,
                opacity: 1,
                scale: 1,
            });

            gsap.to('.hero-image-project-detail-gradient', {
                duration: 1,
                opacity: 1,
                y: 0
            });

            gsap.to('.hero-image-project-detail', {
                duration: 1,
                height: '60vh'
            });
        }
    }, [project]);

    if (loading) {
        return
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }
        
    return (
        <>
            <section className="hero-image-project-detail cover-image"> 
                <Image 
                    src={project.acf.featured_image}
                    width={1000}
                    height={760}
                    className=''
                    alt={project.acf.header_title}
                    priority
                />
                <div className="hero-image-project-detail-gradient"></div>
            </section>

            <HeroTitle className="hero-title hero-title-project">
                <h1>{project.acf.header_title}</h1>
            </HeroTitle>
            <section className="project-detail-image go-home">
                {project.acf.image_details.map((detail, index) => (
                    <Image 
                        key={index} 
                        src={detail.image} 
                        alt={`Image ${index + 1}`} 
                        width={1000}
                        height={760} 
                        priority 
                    />
                ))}
            </section>
            <section className="text-columns content-grid with-margin">
                <div className="text-columns-wrapper text-container">
                    <div className="text-columns-title">
                        <h2>{project.acf.subtitle}</h2>
                    </div>
                    <div className="text-columns-text">
                        <p>{project.acf.description}</p>
                        <div className="btn-center">
                            <Link href={project.acf.button.url} target="_blank" className="btn">
                                {project.acf.button.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
        </>
    );
};

export default ProjectDetail;
