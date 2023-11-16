'use client'

import React, { useState } from 'react';   
import Image from 'next/image';



function  DisplayImage({ title }) {
    const[stories, setStories] = useState('');

    console.log(stories, "stories");

    // Need to get the image url from the server
    const clickHandler = async (e) => {
        try{
            const stories = await fetch('http://localhost:2000/api/stories/get-one-story')
                .then(res => res.json());

                console.log(stories, "stories");
                setStories(stories);


        }catch(err){
            console.log(err);
        }
    }

    
    // Display the image in the browser
    return(

        <div>
            <Image
                src={stories ? oneStoryImage : ''}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <title>kjgkjgkghj</title>
        </div>
    )   
}


export default DisplayImage;