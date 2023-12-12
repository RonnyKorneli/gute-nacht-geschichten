'use client'

import React, {useEffect, useState} from 'react'
import CreateStories from '../../components/createStories.jsx'


function CreateStoriesPage(){

    const [token, setToken] = useState('')
    console.log(token, "token")

    useEffect(() => {
        // Check if the user is logged in (e.g., by validating the token)
        // Update the token state accordingly
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
      }, []);

    return(
        <>
            {
                token ? <CreateStories /> : <h1 className='mt-[150px]'>Not Authorized</h1>
            }
        </>
    )
}

export default CreateStoriesPage