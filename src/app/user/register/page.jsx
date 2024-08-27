'use client'

import React, {useEffect, useState} from 'react'
import CheckTokenExpiration from '../../../../lib/tokenUtils.js'
import Register from '../../../components/register.jsx'


function RegisterPage(){

    
    return(
        <>
             <Register />  
        </>
    )
}

export default RegisterPage