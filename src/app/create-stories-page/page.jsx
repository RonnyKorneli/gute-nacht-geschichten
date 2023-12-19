'use client'

import React, {useEffect, useState} from 'react'
import CreateStories from '../../components/createStories.jsx'
import CheckTokenExpiration from '../../../lib/tokenUtils.js'


function CreateStoriesPage(){

    const [token, setToken] = useState('')
    console.log(token, 'tokenIn Pageeee')    

    useEffect(() => {
        const tokenKey = 'token'; // Define the token key

        if (CheckTokenExpiration(tokenKey)) {
            const storedToken = localStorage.getItem(tokenKey);
            setToken(storedToken);
            // Token is still valid, proceed with using it
        } else {
            setToken(null);
        }
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