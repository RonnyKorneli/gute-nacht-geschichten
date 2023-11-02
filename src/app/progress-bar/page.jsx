'use-client'
import React from 'react'
import ProgressBar from '../components/displayProgessBar.jsx'

function DisplayProgressBar (){

   const testData = [
      {bgColor: "#A0D3F9", completed: 90},
      {bgColor: "#F6C026", completed: 30},
      {bgColor: "#A0D3F9", completed: 80},
      {bgColor: "#F6C026", completed: 20}
   ]


    return(
        <div className='w-full h-full flex flex-col justify-center items-center bg-amber/20'>
            <h1 className='text-3xl mb-4'>Display Progress bar </h1>
            {
               testData.map((item, index)=>{
                 return (
                 <ProgressBar 
                  key={index} 
                  bgColor={item.bgColor} 
                  completed={item.completed} 
                 />
                 )
               })
            }
        </div>
    )
}

export default DisplayProgressBar