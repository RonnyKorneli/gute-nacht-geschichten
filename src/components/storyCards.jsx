'use client'

import React, { useState } from 'react';   
import Image from 'next/image';
import Link from 'next/link';



function  StoryCard({ title, imageUrl, body, author, readTime, recomendedAge, reating }) {



    return(

        <div 
            className='flex flex-col justify-center items-center m-4'
            datatype='thumbnail'
        >
            <Link href="/story">
                <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    layout='static'
                    alt="Picture of the author"
                    className='rounded-lg'
                />
                <h3 className='text-start leading-8 w-[80%]'>{title}</h3>
            </Link>
            

        </div>
    )   
}


export default StoryCard;