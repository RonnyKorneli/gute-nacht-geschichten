import Image from "next/image";

function HeroImage({imageUrl, className, bubbleStyle}) {


    const imagePath = {imageUrl}

    return(
        <div className='h-[430px] w-full fixed top-0 left-0 md:h-[500px] flex justify-center md:justify-end'>
            <div className={bubbleStyle}>
                <h1>Jede Woche eine Neue Geschichte</h1>
            </div>
            <Image
                src={imageUrl}
                className={className}
                layout='fill'
                alt='kids sitting on the bed'
            />
            
        </div>
    )
}

export default HeroImage;