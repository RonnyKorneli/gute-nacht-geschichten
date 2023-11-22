import Link from "next/link";

export default function NavBar() {

    return(
        <>
            <nav className='w-full h-[80px] flex justify-between items-center '>
                <div className="w-[400px] h-full font-[500] flex justify-center items-center">
                    <Link href='/'>
                        <h1 className="text-4xl font-[700]">Julian`s Abenteuer</h1>
                    </Link>
                </div>
                <div className='flex w-[80%] justify-evenly items-center display-none'>
                    <div className=''>
                        <Link href='/ich-bin-julian'>
                            <h3 className="font-[500]">Wer ist Julian?</h3>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='/geschichten'>
                            <h3>Schlafenszeit-Geschichten</h3>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='/geschichten/1'>
                            <h3>Weihnachts-Geschichten</h3>
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