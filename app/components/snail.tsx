import Image from "next/image"
export default function Snail(){
    return(
        <div className="snail">
            <Image 
                src="/snail.png"
                width={513}
                height={320}
                className=''
                alt='Snail image'
                priority
            />
        </div>
    )
}