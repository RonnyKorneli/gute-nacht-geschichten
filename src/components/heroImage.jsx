import Image from "next/image";

function HeroImage({imageUrl, className}) {


    const imagePath = {imageUrl}

    return(
        <div className='h-[430px] w-full fixed top-0 left-0 md:h-[500px] flex justify-center md:justify-end'>
            <div className="z-20 mt-[120px] w-[80%] h-[130px] font-[700] text-white bg-blue rounded-full fixed top-0 text-center flex justify-center items-center  md:w-[300px] md:h-[300px] md:mr-36">
                <h1 className="text-2xl">Jede Woche eine Neue Geschichte</h1>
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