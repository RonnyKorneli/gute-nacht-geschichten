'use client'

import React, {useState} from "react";

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const payload = {
                email,
                password
        }
        console.log(payload, "payload")
        fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            payload
          }),
        })
        .then(response => response.json())
        .then(data => {
            setToken(data.token),
            console.log(data),
            localStorage.setItem('token', data.token)
        })
        .catch(error => console.error('Error:', error));

    }

    

    return(
        <div className="mt-[150px] text-1xl flex justify-center items-start w-full h-[60vh] font-[700]">
            <form 
                onSubmit={submitHandler}
                className="flex flex-col gap-y-4 justify-center items-start"
            >
                <input 
                    placeholder="E Mail"
                    className="border-2 border-slate-500 rounded-md w-[500px] py-2 px-2"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    placeholder="Password"
                    className="border-2 border-slate-500 rounded-md w-[500px] py-2 px-2"
                    type="text" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="border-2 border-slate-500 rounded-md w-[500px] py-2 px-2" >Submit</button>
            </form>
        </div>
    )
}


export default Login