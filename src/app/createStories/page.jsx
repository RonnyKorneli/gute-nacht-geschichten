'use client'

import React, { useState } from 'react';


function CreateStories(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [readTime, setReadTime] = useState('');
    const [recomendedAge, setRecomendedAge] = useState('');
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    
    console.log(imageUrl, "imageUrl");
    console.log(author, "author");
    console.log(file, "File");

    const handleFileChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        setFile(file);

        console.log(file, "chnges herererererer");
        
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const story = {
            title: title, 
            author: author, 
            readTime: readTime,
            recomendedAge: recomendedAge,
            body: body,
            imageUrl: imageUrl
        };

        try {
            //getting signed url from server
            const {url} = await fetch('http://localhost:2000/api/stories/s3Url').then(res => res.json());
            console.log(url);
            //Upload image to S3
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': "multi-part/form-data"
                },
                body: file
            });
            const imageUrl = url.split('?')[0];
            const newStory = {...story, imageUrl: imageUrl};
           
            const res = await fetch('http://localhost:2000/api/stories/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStory)
            });
            const json = await res.json();
            console.log(json);
        } catch (error) {
            console.error("Error creating story!", error);
            throw error;
        }
        //clear form
        setAuthor('');
        setBody('');
        setTitle('');
        setReadTime('');
        setRecomendedAge('');
    }

   

    return (
        <div className='w-full bg-slate-400 h-full flex justify-start items-center flex-col'>
            <h1 className='text-xl mb-12 mt-12'>Create Stories</h1>
            <form 
                action=""
                name="createStory"
                className='w-1/2 bg-white p-5 rounded-lg flex flex-col justify-center items-center'
            >
                
                <input 
                    type="text" 
                    name='title'
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    name='author'
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}

                />
                <input 
                    type="number" 
                    name='readTime'
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Read Time'
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}

                />
                <input 
                    type="number" 
                    name='recomendedAge'
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Recomended Age'
                    value={recomendedAge}
                    onChange={(e) => setRecomendedAge(e.target.value)}

                />
                <textarea 
                    name="story" 
                    id="" 
                    cols="30" 
                    rows="11"
                    placeholder='Body'    
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange} 
                    name="image-file"
                />
                <button
                    className=' w-[90%] bg-blue-500 hover:bg-blue-800 text-white p-2 rounded-lg'
                    onClick={submitHandler}
                >
                    Submit Story
                </button>

            </form>

        </div>
    )
}

export default CreateStories;