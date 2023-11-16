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
            console.log(data)
        });
        


    }, []);

  
    return(
            
            <div className='w-[80%] max-w[1200px] bg-slate-400 flex flex-col justify-center lg:flex-row'>

                {
                   stories.map((story, index) => {
                        return(
                            
                           <StoryCard
                            key={index}
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



 