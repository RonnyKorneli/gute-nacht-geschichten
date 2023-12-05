'use client'
import Image from "next/image";
import TextEditor from '../../../../components/TextEditor.jsx'
import React, { useEffect, useState } from 'react';

async function getStory(id) {
    const res = await fetch(`http://localhost:2000/api/stories/get-story/${id}`, {
        next: {
            revalidate: 60
        }
    });
  return res.json();
}

function UpdateOneStory({params}){

    console.log(params.id, 'params');

    const [story, setStory] = useState('');
    const [storyBody, setStoryBody] = useState('');
    const [storyIntroduction, setStoryIntroduction] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [readTime, setReadTime] = useState('');
    const [recomendedAge, setRecomendedAge] = useState('');
    const [storyId, setStoryId] = useState('');
    const [file, setFile] = useState(null);

    const id = params.id;

    console.log(file, 'filegklgkjekgjerkl');

    const handleFileChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        setFile(file);        
    }

    const submitHandler = async (e) => {
        e.preventDefault();
       
            let story = {
                title: title, 
                author: author, 
                readTime: readTime,
                recomendedAge: recomendedAge,
                body: storyBody,
                introduction: storyIntroduction,
                imageUrl: imageUrl,
                storyId: storyId
            };
    
            try {
                if(file === !null){
                    //getting signed url from server
                    const {url} = await fetch('http://localhost:2000/api/stories/s3Url').then(res => res.json());
                    console.log(file, 'i am hererererererer');
                    //Upload image to S3
                    await fetch(url, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': "multi-part/form-data"
                        },
                        body: file
                    });
                    const imageUrl = url.split('?')[0];
                    story = {...story, imageUrl: imageUrl};
                }
                    const res = await fetch(`http://localhost:2000/api/stories/update-one-story/${id}`, {
                        method: 'PATCH',
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
            //clear form
            setAuthor('');
            setStoryBody('');
            setTitle('');
            setReadTime('');
            setRecomendedAge('');
        

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
        setStoryBody('');
        setTitle('');
        setReadTime('');
        setRecomendedAge('');
    }

    

    useEffect(() => {
        getStory(id)
            .then((story) => {
                setStory(story); 
                setStoryBody(story.body);
                setStoryIntroduction(story.introduction);  
                setImageUrl(story.imageUrl); 
                setTitle(story.title);
                setAuthor(story.author);
                setReadTime(story.readTime);
                setRecomendedAge(story.recomendedAge);  
                setStoryId(story._id);   
            })
            .catch((error) => {
            // Handle errors here
            console.error("An error occurred:", error);
            });
    }, [id]);

    const mainStoryHandler = (text) => {
        const textEditorContent = text;
        setStoryBody(textEditorContent);

    }

    const introductionToStoryHandler = (text) => {
        const textEditorContent = text;
        setStoryIntroduction(textEditorContent);
    }

    return(
        <div className='w-full h-full flex justify-start items-center flex-col'>
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
                 <div className='width-full h-auto'>
                    <h3 className='font-[700] text-start ml-8 mb-[-25px] mt-6 text-2xl'>Write your Story here</h3>
                     <TextEditor
                        initialMarkdown={storyBody} 
                        textEditorHandler={mainStoryHandler}
                    />
                </div>
                <div className='width-full h-auto'>
                    <h3 className='font-[700] text-start ml-8 mb-[-25px] mt-6 text-2xl'>Write your Introduction here (6-9 Sentences)</h3>
                     <TextEditor
                        initialMarkdown={storyIntroduction} 
                        textEditorHandler={introductionToStoryHandler}
                    />
                </div>
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange} 
                    name="image-file"
                />
                <button
                    className=' w-[90%] bg-blue hover:bg-peach hover:text-black mt-6 mb-10 hover:bg-blue-800 z-90 text-white p-2 rounded-lg'
                    onClick={submitHandler}
                >
                    Submit Story
                </button>

            </form>

        </div>
    )
}

export default UpdateOneStory;