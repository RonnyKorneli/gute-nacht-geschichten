'use client'

import React, {useEffect, useState} from 'react'
import CheckTokenExpiration from '../../../../lib/tokenUtils.js'
import Register from '../../../components/register.jsx'


function RegisterPage(){

    const [token, setToken] = useState('')
    console.log(token, 'tokenIn Pageeeesss')    

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
                token ? <Register /> : <h1 className='mt-[150px]'>Not Authorized</h1>
            }
        </>
    )
}

export default RegisterPage