'use client'

import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/storyCards';
import HeroImage from '../../components/heroImage';



function Stories(){

    const [stories, setStories] = useState([]);
    console.log(stories, 'stories up herererrer');

    useEffect(() => {

        fetch('http://localhost:2000/api/stories/get-all-stories')
        .then(response => response.json())
        .then(data => {
            setStories(data);    
            console.log(data[0]._id,'inside fetch')
        });

    }, []);


    return(
            
        <div className='w-full' >
            <HeroImage 
                imageUrl='/BoyReadingBook.jpg'
                className='object-cover object-left-bottom lg:object-center'
                bubbleStyle="mt-[90px] ml-[-230px]  w-[130px] z-20  h-[130px] font-[500] text-sm text-white bg-pink text-black rounded-full fixed top-0 text-center flex justify-center items-center md:text-3xl md:font-[700]  md:w-[300px] md:h-[300px] md:mr-24"
            />
            <div className='w-full flex flex-col mt-[530px] rounded-3xl bg-white relative pt-20 items-center justify-center flex-wrap md:flex-row md:mt-[630px]'>
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
                            reating={story.reating}
                           />
                        )
                   })
                }
            </div>
        </div>
        )
    
}

export default Stories;



 