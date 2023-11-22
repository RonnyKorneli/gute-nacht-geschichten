'use client'

import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/storyCards';



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
            
            <div className='w-full px-2  m-4 flex flex-col  items-center flex-wrap lg:flex-row lg:w-[964px]'>

                {
                   stories.map((story, index) => {
                        return(
                            
                           <StoryCard
                            key={index}
                            _id={story._id}
                            title={story.title}
                            body={story.body}
                            imageUrl={story.imageUrl}
                            author={story.author}
                            readTime={story.readTime}
                            recomendedAge={story.recomendedAge}
                            reating={story.reating}
                           />
                        )
                   })
                }
    
            </div>
        )
    
}

export default Stories;



 