import Image from "next/image";

export default function Dolphin(){
    return(
        <div className="dolphin">
            <Image 
                src="/dolphin.jpg"
                width={493}
                height={447}
                className=''
                alt='Dolphin image'
                priority
            />
        </div>
    )
}