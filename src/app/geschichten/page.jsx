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
            
        <div>
            <HeroImage 
                imageUrl='/BoyReadingBook.jpg'
                className='object-cover object-left-bottom lg:object-center'
            />
            <div className='w-full flex flex-col mt-[330px] relative bg-white pt-20 items-center justify-center flex-wrap lg:flex-row md:mt-[630px]'>
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



 