import Image from 'next/image';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Team(){
    
    useEffect(() => {
        gsap.to(".team", {
            duration: 1,
            opacity: 1,
            y: 0
        })
    })

    return(
        <section className='team with-margin go-home'>
            <div className="team-overview">
                <div className="team-overview-member">
                    <div className="team-overview-member-image">
                        <Image 
                            src="/team/alde-duotone.png"
                            width={303}
                            height={454}
                            className=''
                            alt='Alde teamfoto'
                        />
                        <div className="team-overview-member-name">
                            <h3>Alde</h3>
                            <p>Webdeveloper</p>
                        </div>
                    </div>
                </div>

                <div className="team-overview-member">
                    <div className="team-overview-member-image">
                        <Image 
                            src="/team/iassine-duotone.png"
                            width={303}
                            height={454}
                            className=''
                            alt='iassine teamfoto'
                        />
                        <div className="team-overview-member-name">
                            <h3>Iassine</h3>
                            <p>Webdeveloper</p>
                        </div>
                    </div>
                </div>

                <div className="team-overview-member">
                    <div className="team-overview-member-image">
                        <Image 
                            src="/team/jabir-duotone.png"
                            width={303}
                            height={454}
                            className=''
                            alt='jabir teamfoto'
                        />
                        <div className="team-overview-member-name">
                            <h3>Jabir</h3>
                            <p>Webdeveloper</p>
                        </div>
                    </div>
                </div>

                <div className="team-overview-member">
                    <div className="team-overview-member-image">
                        <Image 
                            src="/team/arie-duotone.png"
                            width={303}
                            height={454}
                            className=''
                            alt='arie teamfoto'
                        />
                        <div className="team-overview-member-name">
                            <h3>Arie</h3>
                            <p>Projectmanager</p>
                        </div>
                    </div>
                </div>

                <div className="team-overview-member">
                    <div className="team-overview-member-image">
                        <Image 
                            src="/team/henri-duotone.png"
                            width={303}
                            height={454}
                            className=''
                            alt='henri teamfoto'
                        />
                        <div className="team-overview-member-name">
                            <h3>Henri</h3>
                            <p>Webdeveloper</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}