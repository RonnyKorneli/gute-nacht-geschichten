import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


export default  function FirstStories() {

    const imageTitleBlockWidth = '350'
    const imageTitleBlockHeight = '200'

    return(
        <main className='w-[80%] flex flex-col justify-center items-center'>
            <div className='flex mb-8'>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/createStories'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 1</h3>
                    </Link>
                </div>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 2</h3>
                    </Link>
                </div>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 3</h3>
                    </Link>
                </div>
            </div>
            <div className='flex mb-8'>
            <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 4</h3>
                    </Link>
                </div>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 5</h3>
                    </Link>
                </div>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 6</h3>
                    </Link>
                </div>
            </div>
           <div className='flex mb-8'>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 7</h3>
                    </Link>
                </div>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 8</h3>
                    </Link>
                </div>
                <div className='m-4 rounded-xl w-[350px] h-[200]'>
                    <Link href='/geschichten/1'>
                        <Image
                            className='rounded-xl' 
                            src="/placeholder.png" 
                            alt="me"
                            width={imageTitleBlockWidth} 
                            height={imageTitleBlockHeight} 
                        />
                        <h3>Titel 9</h3>
                    </Link>
                </div>
           </div>
        </main>
    )
}

 
