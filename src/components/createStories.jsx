'use client'

import React, { useState, useEffect } from 'react';
import TextEditor from './TextEditor.jsx'


function CreateStories(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [readTime, setReadTime] = useState('');
    const [recomendedAge, setRecomendedAge] = useState('');
    const [imageOne, setImageOne] = useState(null);
    const [imageTwo, setImageTwo] = useState(null);
    const [imageThree, setImageThree] = useState(null);
    const [imageFour, setImageFour] = useState(null);
    const [imageUrl, setImageUrl] = useState([]);
    const [mainStoryPartOne, setMainStoryPartOne] = useState('');
    const [mainStoryPartTwo, setMainStoryPartTwo] = useState('');
    const [mainStoryPartThree, setMainStoryPartThree] = useState('');
    const [introductionToStory, setIntroductionToStory] = useState('');
    const [token, setToken] = useState('');
    const [arrayOfImages, setArrayOfImages] = useState([]);

    const handleImageChange = (event, imageNumber) => {
        // Use imageNumber to identify which input is being changed
        const file = event.target.files[0];
    
        // Perform actions based on the selected image input
        switch (imageNumber) {
          case 1:
            arrayOfImages.push(file);

            break;
          case 2:
            arrayOfImages.push(file);
            
            break;
          case 3:
            arrayOfImages.push(file);
            
            break;
          case 4:
            arrayOfImages.push(file);
            
            break;
          default:
            break;
        }
      };

    const mainStoryHandlerPartOne = (text) => {
        const textEditorContent = text;
        setMainStoryPartOne(textEditorContent);
    }

    const mainStoryHandlerPartTwo = (text) => {
        const textEditorContent = text;
        setMainStoryPartTwo(textEditorContent);
    }

    const mainStoryHandlerPartThree = (text) => {
        const textEditorContent = text;
        setMainStoryPartThree(textEditorContent);
    }

    const introductionToStoryHandler = (text) => {
        const textEditorContent = text;
        setIntroductionToStory(textEditorContent);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const story = {
            title: title, 
            author: author, 
            readTime: readTime,
            recomendedAge: recomendedAge,
            body: {
                mainStoryPartOne: mainStoryPartOne,
                mainStoryPartTwo: mainStoryPartTwo,
                mainStoryPartThree: mainStoryPartThree,
            },
            introduction: introductionToStory,
            imageUrl: imageUrl
        };

        try {
            const token = localStorage.getItem('token');
            //getting signed url from server
            const updatedImageUrls = [];
            console.log(updatedImageUrls, 'array of imagesss arraryr in the house');
            await Promise.all(arrayOfImages.map(async (image) => {
                const { url } = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/stories/s3Url`).then(res => res.json());
                console.log(url);
                //Upload image to S3
                await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': "multi-part/form-data"
                    },
                    body: image
                });
                const imageUrl = url.split('?')[0];
                updatedImageUrls.push(imageUrl);
                
            }));
            
            const newStory = {...story, imageUrl: updatedImageUrls};
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/stories/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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
       /*  setAuthor('');
        setBody('');
        setTitle('');
        setReadTime('');
        setRecomendedAge(''); */
    }

    return (
        <div className='w-[60%] h-full flex justify-start items-center flex-col'>
            <h1 className='mb-8 font-[700] text-4xl mt-24'>Lets create a story</h1>
            <form 
                action=""
                name="createStory"
                className='w-full bg-white rounded-lg flex flex-col justify-center items-center'
            >
                
                <input 
                    type="text" 
                    name='title'
                    className='border mb-3 w-[100%] border-gray-400 p-2 rounded-lg'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    name='author'
                    className='border mb-3 w-[100%] border-gray-400 p-2 rounded-lg'
                    placeholder='Author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}

                />
                <input 
                    type="number" 
                    name='readTime'
                    className='border mb-3 w-[100%] border-gray-400 p-2 rounded-lg'
                    placeholder='Read Time'
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}

                />
                <input 
                    type="number" 
                    name='recomendedAge'
                    className='border mb-3 w-[100%] border-gray-400 p-2 rounded-lg'
                    placeholder='Recomended Age'
                    value={recomendedAge}
                    onChange={(e) => setRecomendedAge(e.target.value)}

                />
                <div className='w-full h-auto'>
                    <h3 className='font-[700] text-gray-600  text-start mb-2 mt-12 text-2xl'>Write your Story here. PART ONE</h3>
                     <TextEditor
                        textEditorHandler={mainStoryHandlerPartOne}
                        styles='border border-gray-400 h-[50vh] p-4 w-full overflow-y-auto prose max-w-none outline-none'
                    />
                </div>
                <div className='w-full h-auto'>
                    <h3 className='font-[700] text-gray-600  text-start mb-2 mt-12 text-2xl'>Write your Story here. PART TWO</h3>
                     <TextEditor
                        textEditorHandler={mainStoryHandlerPartTwo}
                        styles='border border-gray-400 h-[50vh] p-4 w-full overflow-y-auto prose max-w-none outline-none'
                    />
                </div>
                <div className='w-full h-auto'>
                    <h3 className='font-[700] text-gray-600  text-start mb-2 mt-12 text-2xl'>Write your Story here. PART THREE</h3>
                     <TextEditor
                        textEditorHandler={mainStoryHandlerPartThree}
                        styles='border border-gray-400 h-[50vh] p-4 w-full overflow-y-auto prose max-w-none outline-none'
                    />
                </div>
                <div className='w-full border-gray-400  mb-6 h-auto'>
                    <h3 className='font-[700] mb-2 text-gray-600 text-start mt-12 text-2xl'>Write your Introduction here (6-9 Sentences)</h3>
                     <TextEditor
                        textEditorHandler={introductionToStoryHandler}
                        styles='border border-gray-400 p-4 h-[30vh] w-full overflow-y-auto prose max-w-none outline-none'
                    />
                </div>
               <h3 className='self-start text-xl font-[500]'>Image NR1</h3>
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={(event) => handleImageChange(event, 1)} 
                    name="image-file"
                    className='border mb-3 w-[100%] border-gray-400 p-2'
                />
                <h3 className='self-start text-xl font-[500]'>Image NR2</h3>
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={(event) => handleImageChange(event, 2)} 
                    name="image-file"
                    className='border mb-3 w-[100%] border-gray-400 p-2'
                />
                <h3 className='self-start text-xl font-[500]'>Image NR3</h3>
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={(event) => handleImageChange(event, 3)}
                    name="image-file"
                    className='border mb-3 w-[100%] border-gray-400 p-2'
                />
                <h3 className='self-start text-xl font-[500]'>Image NR4</h3>
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={(event) => handleImageChange(event, 4)}
                    name="image-file"
                    className='border mb-3 w-[100%] border-gray-400 p-2'
                />
                <button
                    className=' w-[100%] font-[700] text-xl bg-blue mb-36 hover:bg-peach hover:text-black mt-6 hover:bg-blue-800 z-90 text-white p-2 rounded-lg'
                    onClick={submitHandler}
                >
                    Submit Story
                </button>

            </form>

        </div>
    )
}

export default CreateStories;