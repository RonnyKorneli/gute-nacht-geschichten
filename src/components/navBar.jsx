import Link from "next/link";

export default function NavBar() {

    return(
        <>
            <nav className='w-full h-[80px] flex justify-between items-center fixed top-0 left-0 overflow-hidden z-50 bg-white'>
                <div className="w-[400px] h-full font-[500] flex justify-center items-center">
                    <Link href='/'>
                        <h1 className="text-4xl font-[700] text-purple">Julian`s Abenteuer</h1>
                    </Link>
                </div>
                <div className='w-[80%] hidden justify-evenly items-center lg:flex'>
                    <div className=''>
                        <Link href='/ich-bin-julian'>
                            <h3 className="font-[500]">Wer ist Julian?</h3>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='/geschichten'>
                            <h3 className="font-[500]">Gute Nacht Geschichten</h3>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='/geschichten/1'>
                            <h3 className="font-[500]">Weihnachts-Geschichten</h3>
                        </Link>
                    </div>
                    <div 
                        className='bg-blue py-4 text-white px-6 flex justify-center items-center rounded-md'
                        role="button"
                    >
                            <Link href='/geschichten/1'>
                                <h3>Neue Geschichten</h3>
                            </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}