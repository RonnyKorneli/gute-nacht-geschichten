'use client'

import React, { useState } from 'react';   
import Image from 'next/image';
import Link from 'next/link';

// This Link will will give you the right calculation for sizes in the Image component
// https://ausi.github.io/respimagelint/ 

//TASKS: 
// 1. Add a Link to the Image
// 2. Make Images above the fold priority!! Other Images could have lazyloading. When true, Image will preload



function  StoryCard({ title, _id, imageUrl, priority }) {

    console.log(_id, 'id inside storyCard')
    return(

        <div 
            className='flex flex-col justify-center px-6 items-center w-[95%] mb-12  lg:h-auto lg:w-[300px] lg:m-2'
            datatype='thumbnail'
        >
            <Link 
                href={`/stories/${_id}`}
                className='w-full self-start relative md:h-[400px] h-[250px] lg:h-[200px] lg:w-[300px]'
            >
                    <Image
                        src={imageUrl}
                        className='rounded-3xl object-cover'
                        fill
                        placeholder='blur'
                        blurDataURL={imageUrl}
                        alt="Picture of the author"
                        _id={_id}
                    />
            </Link>
            <div className='w-full lg:mb-24 lg:relative '>
                <h3 className='text-start lg:absolute self-start mt-2 text-2xl font-[700] '>{title}</h3>
            </div>
        </div>
    )   
}


export default StoryCard;