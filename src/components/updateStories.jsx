'use client'

import React, { useState, useEffect } from 'react';
import StoryCard from './storyCards.jsx';

function UpdateStories({params}){

    const [stories, setStories] = useState([]);
    
    useEffect(() => {

        fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/stories/get-all-stories`)
        .then(response => response.json())
        .then(data => {
            setStories(data);    

        });

    }, []);


    return(
            
        <div className='w-full' >
            <div className='w-full flex flex-col mt-[100px] rounded-3xl bg-white relative items-center justify-center md:mt-[130px]'>
                <h1 className='text-8xl font-[700]'>UPDATE Story</h1>
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
                            reating={story.rating}
                            urlSection={'create-stories-page/update-stories-page'}
                           />
                        )
                   })
                }
                </div>
            </div>
        </div>
        )
    
}

export default UpdateStories;



 