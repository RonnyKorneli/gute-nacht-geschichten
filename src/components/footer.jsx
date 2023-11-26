import Link from "next/link";

function Footer() {

    return(
        <div className="w-full bg-black pl-12 z-30  h-auto flex flex-col items-start md:items-center  py-8 ">
            <div className="flex flex-col justify-start md:w-3/4 text-white font-[400] md:flex-row md:justify-evenly ">
                <Link href='/geschichten'>Gute nacht geschichten</Link>
                <Link href='/weihnachtsgeschichten'>Weihnachtsgeschichten</Link>
                <Link href='/ostergeschichten'>Ostergeschichten</Link>
                <Link href='/klassische-märchen'>Klassische Märchen</Link>
            </div>
            <div className="flex flex-col md:w-3/4 text-white font-[400] mt-4 md:flex-row md:justify-evenly ">
                <Link href='/createStories'>2023 <b>© Julian`s Abenteuer</b></Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/datenschutz'>Datenschutz</Link>
                <Link href='/impressum'>Impressum</Link>
            </div>
        </div>
    )
}

export default Footer;