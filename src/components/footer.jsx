import Link from "next/link";

function Footer() {

    return(
        <div className="w-full bg-black h-[150px] flex flex-col items-center justify-evenly py-4 ">
            <div className="w-3/4 text-white font-[400] flex justify-between ">
                <Link href='/geschichten'>Gute nacht geschichten</Link>
                <Link href='/weihnachtsgeschichten'>Weihnachtsgeschichten</Link>
                <Link href='/ostergeschichten'>Ostergeschichten</Link>
                <Link href='/klassische-märchen'>Klassische Märchen</Link>
            </div>
            <div className="w-3/4 text-white font-[400] flex justify-between ">
                <Link href='/createStories'>2023 <b>© Julian`s Abenteuer</b></Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/datenschutz'>Datenschutz</Link>
                <Link href='/impressum'>Impressum</Link>
            </div>
        </div>
    )
}

export default Footer;