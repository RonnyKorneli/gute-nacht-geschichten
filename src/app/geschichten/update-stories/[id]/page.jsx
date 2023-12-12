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

    const [story, setStory] = useState('');
    const [storyBodyPartOne, setStoryBodyPartOne] = useState('');
    const [storyBodyPartTwo, setStoryBodyPartTwo] = useState('');
    const [storyBodyPartThree, setStoryBodyPartThree] = useState('');
    const [storyIntroduction, setStoryIntroduction] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [readTime, setReadTime] = useState('');
    const [recomendedAge, setRecomendedAge] = useState('');
    const [storyId, setStoryId] = useState('');
    const [file, setFile] = useState(null);
    const [editor, setEditor] = useState(null);


    const titleForPage = story.title;

    const id = params.id;
    useEffect(() => {
        getStory(id)
            .then((story) => {
                setStory(story); 
                setStoryBodyPartOne(story.body.mainStoryPartOne);
                setStoryBodyPartTwo(story.body.mainStoryPartTwo);
                setStoryBodyPartThree(story.body.mainStoryPartThree);
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

    const handleFileChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        setFile(file);        
    }

    const titleHandler = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
        }
        const response = await fetch(`http://localhost:2000/api/stories/update-title/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            //send some alert for user to see the update was successful
            const responseData = await response.json();
            console.log(responseData); // This will contain the response data from your server
        } else {
            console.log('Error:', response.status);
        }
    }

    const authorHandler = async (e) => {
        e.preventDefault();
        const data = {
            author: author,
        }
        const response = await fetch(`http://3.76.220.77:2000'/api/stories/update-author/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            //send some alert for user to see the update was successful
            const responseData = await response.json();
            console.log(responseData); // This will contain the response data from your server
        } else {
            console.log('Error:', response.status);
        }
    }

    const readTimeHandler = async (e) => {
        e.preventDefault();
        const data = {
            readTime: readTime,
        }
        const response = await fetch(`http://3.76.220.77:2000'/api/stories/update-read-time/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            //send some alert for user to see the update was successful
            const responseData = await response.json();
            console.log(responseData); // This will contain the response data from your server
        } else {
            console.log('Error:', response.status);
        }
    }

    const recomendedAgeHandler = async (e) => {
        e.preventDefault();
        const data = {
            recomendedAge: recomendedAge,
        }
        const response = await fetch(`http://3.76.220.77:2000'/api/stories/update-recomended-age/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            //send some alert for user to see the update was successful
            const responseData = await response.json();
            console.log(responseData); // This will contain the response data from your server
        } else {
            console.log('Error:', response.status);
        }
    }

    const sendStoryHandler = async (e) => {
        e.preventDefault();
        const data = {
            body: {
                mainStoryPartOne: storyBodyPartOne,
                mainStoryPartTwo: storyBodyPartTwo,
                mainStoryPartThree: storyBodyPartThree,
            }
        }
        const response = await fetch(`http://localhost:2000/api/stories/update-body/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            //send some alert for user to see the update was successful
            const responseData = await response.json();
            console.log(responseData); // This will contain the response data from your server
        } else {
            console.log('Error:', response.status);
        }
    }

    const sendIntroHandler = async (e) => {
        e.preventDefault();
        const data = {
            introduction: storyIntroduction,
        }
        const response = await fetch(`http://localhost:2000/api/stories/update-intro/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            //send some alert for user to see the update was successful
            const responseData = await response.json();
            console.log(responseData); // This will contain the response data from your server
        } else {
            console.log('Error:', response.status);
        }
    }

    const updateImageHandler = async (e) => {
        e.preventDefault();
        let data = {}
        try {
            //Signed Temporarily URL
            const {url} = await fetch('http://3.76.220.77:2000/api/stories/s3Url').then(res => res.json());
            console.log(url, 'url');
            //Upload image to S3
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': "multi-part/form-data"
                },
                body: file
            });
            const imageUrl = url.split('?')[0];
            data = {imageUrl: imageUrl}
            console.log(data,'imageUrl');

            const response = await fetch(`http://3.76.220.77:2000/api/stories/update-image-url/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                //send some alert for user to see the update was successful
                const responseData = await response.json();
                console.log(responseData); // This will contain the response data from your server
            } else {
                console.log('Error:', response.status);
            }

        } catch(error) {
            console.log(error);
        }

       
    }

    const mainStoryHandlerPartOne = (text) => {
        const textEditorContent = text;
        setStoryBodyPartOne(textEditorContent);

    }

    const mainStoryHandlerPartTwo = (text) => {
        const textEditorContent = text;
        setStoryBodyPartTwo(textEditorContent);

    }

    const mainStoryHandlerPartThree = (text) => {
        const textEditorContent = text;
        setStoryBodyPartThree(textEditorContent);

    }
   
    const introductionToStoryHandler = (text) => {
        const textEditorContent = text;
        setStoryIntroduction(textEditorContent);
    }

    return(
        <div className='w-full h-full flex justify-start mt-[150px] items-center flex-col'>
            <div>
                <h1 className="font-[700] text-5xl mb-12 ">UPDATE { `"${titleForPage}"` }</h1>
                 <div className="flex w-full">
                     <input 
                         type="text" 
                         name='title'
                         className='border mb-3 w-[90%] border-gray-400 p-2 rounded-l-lg'
                         placeholder='Title'
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                     />
                     <button 
                         onClick={titleHandler}
                         className="font-1xl font-[700]  bg-blue w-[290px] h-[42px] text-white rounded-r-lg"
                     >UPDATE TITLE</button>
                 </div>
                 <div className="flex w-full">
                     <input 
                        type="text" 
                        name='author'
                        className='border mb-3 w-[90%] border-gray-400 p-2 rounded-l-lg'
                        placeholder='Author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                     />
                      <button 
                        onClick={authorHandler}
                        className="font-1xl font-[700]  bg-blue w-[290px] h-[42px] text-white rounded-r-lg"
                     >UPDATE AUTHOR</button>
                 </div>
                 <div className="flex w-full">
                     <input 
                         type="number" 
                         name='readTime'
                         className='border mb-3 w-[90%] border-gray-400 p-2 rounded-l-lg'
                         placeholder='Read Time'
                         value={readTime}
                         onChange={(e) => setReadTime(e.target.value)}
                     />
                     <button 
                         onClick={readTimeHandler}
                         className="font-1xl font-[700] bg-blue w-[290px] h-[42px] text-white rounded-r-lg"
                     >UPDATE READTIME</button>
                 </div>
                 <div className="flex w-full justify-between">
                     <input 
                        type="number" 
                        name='recomendedAge'
                        className='border mb-3 w-[90%] border-gray-400 p-2 rounded-l-lg'
                        placeholder='Recomended Age'
                        value={recomendedAge}
                        onChange={(e) => setRecomendedAge(e.target.value)}
                     />
                     <button 
                         onClick={recomendedAgeHandler}
                         className="font-1xl font-[700] bg-blue w-[290px] h-[42px] text-white rounded-r-lg"
                     >UPDATE RECOMENDED AGE</button>
                 </div>
                 <div className='width-full mt-16 h-auto'>
                     <div>
                        <TextEditor
                            initialMarkdown={storyIntroduction} 
                            textEditorHandler={introductionToStoryHandler}
                            styles='border prose:border-gray-400 h-[10rem] p-4 overflow-y-auto prose max-w-none outline-none'
                        />
                        <button 
                            onClick={sendIntroHandler}
                            className="font-1xl font-[700]  bg-blue w-full h-[60px] text-white rounded-b-lg"
                        >UPDATE INTRO</button>
                     </div>
                 </div>
                  <div className='width-full flex mt-16 flex-col h-auto'>
                    <div className="flex flex-col">
                         <TextEditor
                            initialMarkdown={storyBodyPartOne} 
                            textEditorHandler={mainStoryHandlerPartOne}
                            styles='border border-gray-400 p-4 h-[50vh] overflow-y-auto prose max-w-none outline-none'
                        />
                         <button 
                            onClick={sendStoryHandler}
                            className="font-1xl font-[700]  bg-blue w-full h-[60px] text-white rounded-b-lg"
                        >UPDATE STORY</button>
                     </div>
                 </div>
                 <div className='width-full flex mt-16 flex-col h-auto'>
                    <div className="flex flex-col">
                         <TextEditor
                            initialMarkdown={storyBodyPartTwo} 
                            textEditorHandler={mainStoryHandlerPartTwo}
                            styles='border border-gray-400 p-4 h-[50vh] overflow-y-auto prose max-w-none outline-none'
                        />
                         <button 
                            onClick={sendStoryHandler}
                            className="font-1xl font-[700]  bg-blue w-full h-[60px] text-white rounded-b-lg"
                        >UPDATE STORY</button>
                     </div>
                 </div>
                 <div className='width-full flex mt-16 mb-12 flex-col h-auto'>
                    <div className="flex flex-col">
                         <TextEditor
                            initialMarkdown={storyBodyPartThree} 
                            textEditorHandler={mainStoryHandlerPartThree}
                            styles='border border-gray-400 p-4 h-[50vh] overflow-y-auto prose max-w-none outline-none'
                        />
                         <button 
                            onClick={sendStoryHandler}
                            className="font-1xl font-[700]  bg-blue w-full h-[60px] text-white rounded-b-lg"
                        >UPDATE STORY</button>
                     </div>
                 </div>
                 <div>
                    <input 
                         type="file" 
                         accept="image/*"
                         onChange={handleFileChange} 
                         name="image-file"
                         className="mb-20"
                    />
                    <button 
                        onClick={updateImageHandler}
                        className="font-1xl font-[700]  bg-blue w-[300px] h-[40px] text-white rounded-lg"
                    >UPDATE IMAGE</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateOneStory;