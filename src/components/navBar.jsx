import Link from "next/link";

export default function NavBar() {

    return(
        <>
            <nav className='w-full h-[100px] flex justify-between items-center bg-slate-400'>
                <div className="w-[150px] h-[100px] flex justify-center items-center bg-slate-200">
                    <h1>Logo</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='m-4 rounded-xl w-[350px] h-[200]'>
                        <Link href='/'>
                            <h3>Home</h3>
                        </Link>
                    </div>
                    <div className='m-4 rounded-xl w-[350px] h-[200]'>
                        <Link href='/createStories'>
                            <h3>Erstellen</h3>
                        </Link>
                    </div>
                    <div className='m-4 rounded-xl w-[350px] h-[200]'>
                        <Link href='/geschichten/1'>
                            <h3>Meine Geschichten</h3>
                        </Link>
                    </div>
                    <div className='m-4 rounded-xl w-[350px] h-[200]'>
                        <Link href='/geschichten/1'>
                            <h3>Mein Profil</h3>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}