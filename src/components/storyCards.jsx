'use client'

import React, { useState } from 'react';   
import Image from 'next/image';
import Link from 'next/link';

// This Link will will give you the right calculation for sizes in the Image component
// https://ausi.github.io/respimagelint/ 

//TASKS: 
// 1. Add a Link to the Image
// 2. Make Images above the fold priority!! Other Images could have lazyloading. When true, Image will preload



function  StoryCard({ title, imageUrl, priority }) {



    return(

        <div 
            className='flex flex-col justify-center m-2 items-center w-[600px] h-[600px] lg:h-[300px] lg:w-[300px]  bg-white rounded-lg lg:m-2'
            datatype='thumbnail'
        >
            <Link 
                href="/story"
                className='flex flex-col justify-center items-center h-[600px] w-[600px] bg-white rounded-lg relative lg:h-[300px] lg:w-[300px]'
            >
                    <Image
                        src={imageUrl}
                        fill
                        alt="Picture of the author"
                        className='rounded-lg m-0'
                />
            </Link>
            <h3 className='text-start self-start w-[80%] mt-3 p-0 text-2xl'>{title}</h3>
            

        </div>
    )   
}


export default StoryCard;