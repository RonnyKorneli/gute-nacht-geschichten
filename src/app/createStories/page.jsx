'use client'

import React, { useState } from 'react';

function CreateStories(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [readTime, setReadTime] = useState('');
    const [recomendedAge, setRecomendedAge] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const story = {
            title: title, 
            author: author, 
            readTime: readTime,
            recomendedAge: recomendedAge,
            body: body
        };
       console.log(story);

        try {
            const res = await fetch('http://localhost:2000/api/stories/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(story)
            });
            const json = await res.json();
            console.log(json);
        } catch (error) {
            console.error("Error creating story!", error);
            throw error;
        }

       /*  setAuthor('');
        setTitle('');
        setReadTime(null);
        setRecomendedAge(null); */
    }


    return (
        <div className='w-full bg-slate-400 h-full flex justify-start items-center flex-col'>
            <h1 className='text-xl mb-12 mt-12'>Create Stories</h1>
            <form 
                action=""
                className='w-1/2 bg-white p-5 rounded-lg flex flex-col justify-center items-center'
            >
                
                <input 
                    type="text" 
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Author'
                    onChange={(e) => setAuthor(e.target.value)}

                />
                <input 
                    type="number" 
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Read Time'
                    onChange={(e) => setReadTime(e.target.value)}

                />
                <input 
                    type="number" 
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    placeholder='Recomended Age'
                    onChange={(e) => setRecomendedAge(e.target.value)}

                />
                <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="11"
                    placeholder='Body'    
                    className='border mb-3 w-[90%] border-gray-400 p-2 rounded-lg'
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
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