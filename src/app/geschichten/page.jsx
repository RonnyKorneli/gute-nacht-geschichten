'use client'

import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/storyCards';
import HeroImage from '../../components/heroImage';



function Stories({params}){

    console.log(params, 'params inside stories')

    const [stories, setStories] = useState([]);
    
    useEffect(() => {

        fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/stories/get-all-stories`)
        .then(response => response.json())
        .then(data => {
            setStories(data);    

        });

    }, []);

    console.log(stories, 'stories inside stories')
    return(
            
        <div className='w-full' >
            <HeroImage 
                imageUrl='/BoyReadingBook.jpg'
                className='object-cover object-left-bottom lg:object-center'
                bubbleStyle="mt-[90px] ml-[-230px]  w-[130px] z-20  h-[130px] font-[500] text-sm text-white bg-pink text-black rounded-full fixed top-0 text-center flex justify-center items-center md:text-3xl md:font-[700]  md:w-[300px] md:h-[300px] md:mr-24"
            />
            <div className='w-full flex flex-col mt-[600px] rounded-3xl bg-white relative items-center justify-center md:mt-[630px]'>
                <div className='flex flex-col w-full rounded-3xl relative pt-20 items-center justify-center flex-wrap md:flex-row md:justify-evenly  lg:w-[80%]'>
                {
                   stories.map((story, index) => {
                        return(
                           <StoryCard
                            key={index}
                            _id={story._id}
                            recomendedAge={story.recomendedAge}
                            title={story.title}
                            body={story.body}
                            imageUrl={story.imageUrl}
                            author={story.author}
                            readTime={story.readTime}
                            rating={story.reating}
                            urlSection='geschichten'
                           />
                        )
                   })
                }
                </div>
            </div>
        </div>
        )
    
}

export default Stories;



 