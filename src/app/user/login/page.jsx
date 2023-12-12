'use client'

import React, {useState} from "react";

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    // Getting  the Token later
    const storedToken = localStorage.getItem('authToken');

    console.log(token, "token")

    const submitHandler = (e) => {
        e.preventDefault()

        const payload = {
                email,
                password
        }
        console.log(payload, "payload")
        fetch('http://localhost:2000/api/user/login', {
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
        <div className="mt-[150px] text-6xl flex justify-center bg-slate-400 w-full font-[700]">
            <form 
                onSubmit={submitHandler}
                className="flex flex-col gap-y-4 justify-center items-start"
            >
                <input 
                    placeholder="E Mail"
                    className="border-2 border-black"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    placeholder="Password"
                    className="border-2 border-black"
                    type="text" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="border border-black" >Submit</button>
            </form>
        </div>
    )
}


export default Login