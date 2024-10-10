import Image from 'next/image';
import gsap from 'gsap';
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import useSWR from 'swr';


const dataUrl = 'https://wp.growskills.nl/wp-json/wp/v2/projects?acf_format=standard&_fields=id,slug,acf';

interface ProjectData {
    id: string;
    slug: string;
    acf: {
      featured_image: string;
      header_title: string;
      button: {
        title: string;
      };
    };
  }
  
  interface ProjectProps {
    showLastOnly?: boolean;
  }

  
  const Project: React.FC<ProjectProps> = ({ showLastOnly = false }) => {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const router = useRouter();
    
  
    useEffect(() => {
      const fetchProjects = async () => {
        
        try {
          const response = await fetch(dataUrl);
          const contentType = response.headers.get('content-type');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          if (contentType && contentType.indexOf('application/json') !== -1) {
            const data: ProjectData[] = await response.json();
            if (showLastOnly) {
              setProjects([data[data.length - data.length]]);
            } else {
              setProjects(data); 
            }
          } else {
            throw new Error('Response not JSON');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchProjects();
    }, [showLastOnly]);
  
    useEffect(() => {
      if (projects.length) {
        gsap.to('.project-overview-item-image', {
          duration: 1,
          y: '0',
          opacity: 1,
          stagger: 0.2,
          scrollTrigger:{
            trigger: ".project-overview-item-image",
            scrub: true,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          }
        });
        gsap.set('.cta, footer', {
          opacity: 1,
        });
      }
    }, [projects]);
  
    const onClick = (project: ProjectData) => {
      gsap.to('.hero-title', {
        duration: 1,
        y: '-100vh',
        opacity: 0,
      });
  
      gsap.to('header', {
        duration: 0.5,
        y: '-250%',
        opacity: 0,
      });
  
      gsap.set('.project-overview', {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
      });
  
      gsap.set('.cta, footer', {
        opacity: 0,
      });
  
      const clickedDiv = document.querySelector('.project-' + project.id) as HTMLElement;
      const clickedDivImage = clickedDiv.querySelector('.project-overview-item-image') as HTMLElement;
      const clickedImagePos = clickedDiv.getBoundingClientRect();
  
      gsap.set(clickedDiv, {
        position: 'fixed',
        zIndex: 100,
        top: clickedImagePos.top,
        left: clickedImagePos.left,
        width: clickedImagePos.width,
        height: clickedImagePos.height,
        marginTop: 0,
        opacity: 0,
      });
  
      gsap.to(clickedDiv, {
        duration: 0,
        width: 'calc(100vw + 50px)',
        height: 'calc(100vh + 50px)',
        top: -25,
        left: -25,
        onComplete: () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          router.push(`/projecten/${project.slug}`);
        },
      });
    };
  
    return (
      <div className="project-overview">
        {projects.map((project) => (
          <a
            key={project.id}
            data-project={project.id}
            className={'project-overview-item project-' + project.id}
            onClick={(e) => {
              e.preventDefault();
              onClick(project);
            }}
            href={`/projecten/${project.slug}`}
          >
            <div className="project-overview-item-image">
              <Image
                src={project.acf.featured_image}
                width={1000}
                height={760}
                className=""
                alt={project.acf.header_title}
                priority
              />
            </div>
            <div className="project-overview-item-title">
              <h3>{project.acf.header_title}</h3>
              <span className="btn">{project.acf.button.title}</span>
            </div>
          </a>
        ))}
      </div>
    );
  };
  
  export default Project;

function cors(): any {
  throw new Error('Function not implemented.');
}
