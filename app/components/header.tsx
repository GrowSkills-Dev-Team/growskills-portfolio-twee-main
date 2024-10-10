'use client';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import Image from 'next/image';

const NavLinks = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'Projecten', path: '/projecten' },
	{ id: 3, name: 'Ons verhaal', path: '/ons-unieke-verhaal' },
	{ id: 4, name: 'Ons team', path: '/ons-team' },
	{ id: 5, name: 'Contact', path: '/contact' },
];

const Header = () => {

    useEffect(() => {
        gsap.to('header', {
            duration: 1,
            y: '0',
            opacity: 1
        })

    });

    const navigate = useRouter();
	const pathname = usePathname();
	const isActive = (path: string) => path === pathname;

    // Header scroll
    // function fixHeaderOnScroll() {
    //     const header: any = document.querySelector('header');
    
    //     if (window.scrollY >= 1) {
    //         header.classList.add('fixed');
    //     } else {
    //         header.classList.remove('fixed');
    //     }
    // }
    
    // window.addEventListener('scroll', fixHeaderOnScroll);
    // fixHeaderOnScroll();

    const openMenu = () => {
        document.body.classList.add('menu-is-open');
        gsap.to('.header-menu-small', {
            x: 0,
            rotate: 0,
            scale: 1,
            opacity: 1
        });
    }

    const closeMenu = () => {
        document.body.classList.remove('menu-is-open');
        window.scrollTo({top: scrollPosition, behavior: 'auto'});
        gsap.to('.header-menu-small', {
            x: '100%',
            rotate: -20,
            scale: 0.5,
            opacity: 0,
            onComplete: () => {
                gsap.set('.header-menu-small', {
                    x: '-100%',
                    rotate: 20,
                    scale: 0.5,
                    opacity: 0
                })
            }
        })
    }

    let scrollPosition = 0;
    const toggleMenu: any = () => {
        if (document.body.classList.contains('menu-is-open')) {
            closeMenu();
        } else {
            scrollPosition = window.scrollY;
            openMenu();
        }
    }

    const onClick = () => {
        if(pathname === "/") return;

        gsap.to('header', {
            duration: 0.5,
            y: '-250%',
            opacity: 0
        })
        
        let heroImageDetail = document.querySelector('.hero-image-project-detail') as HTMLElement;
        if(heroImageDetail){
            gsap.to(heroImageDetail, {
                duration: 1,
                y: '-100%',
                opacity: 0
            })
        }

        gsap.to('.go-home', {
            duration: 1,
            y: '100%',
            opacity: 0
        })
        gsap.to(".hero-title", {
            duration: 1,
            y: "-100%",
            opacity: 0,
            onComplete: () => navigate.push('/')
        });
    };

    const onMenuClick = (e: any) => {
        let heroImageDetail = document.querySelector('.hero-image-project-detail') as HTMLElement;
        if(heroImageDetail){
            gsap.to(heroImageDetail, {
                duration: 1,
                y: '-100%',
                opacity: 0
            })
        }
        
        gsap.to('.header-menu-small', {
            y: '-100%'
        })
        gsap.to('.hero-title', {
            duration: 1,
            y: '-100vh',
            opacity: 0
        });

        gsap.to('.go-home', {
            duration: 1,
            y: '100%',
            opacity: 0
        })

        gsap.to('header', {
            duration: 0.5,
            y: '-250%',
            opacity: 1,
            onComplete: () => navigate.push(e.target.dataset.link)
        })
    }

    const onMenuMobileClick = (e: any) => {
        let duration = 1;
        gsap.to('header', {
            duration: duration,
            y: '-250%',
            opacity: 1
        })

        gsap.to('.hero-title', {
            duration: duration,
            y: '-100vh',
            opacity: 0
        });

        gsap.to('.go-home', {
            duration: duration,
            y: '100%',
            opacity: 0,
            onComplete: () => navigate.push(e.target.dataset.link)
        })

        closeMenu();

        document.body.classList.remove('menu-is-open');
    }

	return (
        <>
        <header>
            <a onClick={onClick} className='logo'>
                <Image 
                    src='/logo.svg'
                    width={50}
                    height={32}
                    className=''
                    alt='logo'
                    priority
                />
            </a>
            <button onClick={() => toggleMenu()} className="header-burger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className='header-menu-large'>
                {NavLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a onClick={(e) => onMenuClick(e)} data-link={link.path} className={isActive(link.path) ? 'active' : ''}>{link.name}</a>
                        </li>
                    );
                })}
            </ul>
        </header>

        <div className="header-menu-small">
            <div className="wrapper">
                <ul>
                {NavLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a onClick={(e) => onMenuMobileClick(e)} data-link={link.path} className={isActive(link.path) ? 'active' : ''}>{link.name}</a>
                        </li>
                    );
                })}
                </ul>
            </div>
        </div>

        </>
	);
};

export default Header;