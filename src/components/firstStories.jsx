'use client'

import React, { useState, useEffect } from 'react';
import StoryCard from '../components/storyCards.jsx';
import HeroImage from '../components/heroImage';
import Link from 'next/link';

//http://3.76.220.77:2000
export default  function FirstStories() {
    const [stories, setStories] = useState([]);
    const firstNineStories = stories.slice(0, 9);

    useEffect(() => {

        fetch('http://localhost:2000/api/stories/get-all-stories')
        .then(response => response.json())
        .then(data => {
            setStories(data);    

        });

    }, []);



    return(
        <section className='w-full pt-20 z-20 flex rounded-3xl flex-col items-center'>
            <div className='flex flex-col w-full rounded-3xl relative pt-20 items-center justify-center flex-wrap md:flex-row md:justify-evenly  lg:w-[80%]'>
                {
                   firstNineStories.map((story, index) => {
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
                <div className='flex pb-12'>
                    <Link 
                        href='/create-stories-page/update-stories-page'
                        className='w-[200px] mr-12 h-[50px] bg-pink text-white text-center flex justify-center items-center rounded-3xl mt-10'
                        >
                            UPDATE SORIES
                    </Link>
                    <Link 
                        href='/create-stories-page'
                        className='w-[200px] h-[50px] bg-pink text-white text-center flex justify-center items-center rounded-3xl mt-10'
                        >
                            CREATE STORIES
                    </Link>
                </div>
        </section>
    )
}


