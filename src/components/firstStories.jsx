import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


export default  function FirstStories() {

   

    return(
        <section className='w-full pt-20 z-20 flex rounded-3xl flex-col items-center'>
             <div className='flex flex-col justify-center items-center w-full lg:flex lg:flex-row'>
                <div 
                    className='flex flex-col mb-10 justify-center items-center w-[80%] lg:h-auto lg:w-auto lg:mr-8'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute top-2 text-2xl font-[700] '>Title 1</h3>
                    </div>
                </div>
                <div 
                    className='flex flex-col mb-10 justify-center items-center w-[80%] lg:h-auto lg:w-auto'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute  top-2 text-2xl font-[700] '>Title 2</h3>
                    </div>
                </div>
                <div 
                    className='flex flex-col mb-10 justify-center items-center w-[80%] lg:h-auto lg:w-auto lg:ml-8'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute top-2 text-2xl font-[700] '>Title 3</h3>
                    </div>
                </div>
            </div>
             <div className='flex flex-col justify-center items-center w-full lg:flex lg:flex-row '>
                <div 
                    className='flex flex-col mb-10 justify-center  items-center w-[80%] lg:h-auto lg:w-auto lg:mr-8'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full  relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute top-2 text-2xl font-[700] '>Title 4</h3>
                    </div>
                </div>
                <div 
                    className='flex flex-col mb-10 justify-center  items-center w-[80%] lg:h-auto lg:w-auto'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute  top-2 text-2xl font-[700] '>Title 5</h3>
                    </div>
                </div>
                <div 
                    className='flex flex-col mb-10 justify-center  items-center w-[80%] lg:h-auto lg:w-auto lg:ml-8'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute top-2 text-2xl font-[700] '>Title 6</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full lg:flex lg:flex-row '>
                <div 
                    className='flex flex-col mb-10 justify-center  items-center w-[80%] lg:h-auto lg:w-auto lg:mr-8'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full  relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute top-2 text-2xl font-[700] '>Title 7</h3>
                    </div>
                </div>
                <div 
                    className='flex flex-col mb-10 justify-center items-center w-[80%] lg:h-auto lg:w-auto'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute  top-2 text-2xl font-[700] '>Title 8</h3>
                    </div>
                </div>
                <div 
                    className='flex flex-col mb-10 justify-center  items-center w-[80%] lg:h-auto lg:w-auto lg:ml-8'
                    datatype='thumbnail'
                >
                    <Link 
                        href='/geschichten/1'
                        className='w-full relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
                    >
                         <Image
                             src="/placeholder.png"
                             className='rounded-3xl object-cover'
                             fill
                             placeholder='blur'
                             blurDataURL="/placeholder.png"
                             alt="Picture of the author"
                             _id='1'
                         />
                    </Link>
                    <div className='w-full lg:mb-24 lg:relative '>
                        <h3 className='text-start lg:absolute top-2 text-2xl font-[700] '>Title 9</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-1/3 '>
                <Link 
                    href='/createStories'>
                    <button className='bg-blue text-white font-[700] text-xl w-[200px] h-[50px] rounded-3xl mb-10'>Create Stories</button>
                </Link>
                <Link 
                    href='/geschichten/update-stories'>
                    <button className='bg-blue text-white font-[700] text-xl w-[200px] h-[50px] rounded-3xl mb-10'>Update Stories</button>
                </Link>
            </div>
        </section>
    )
}

 
