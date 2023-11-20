import Link from 'next/link'
import Stories from './geschichten/page.jsx'
import FirstStories from '../components/firstStories.jsx'
import NavBar from '../components/navBar.jsx'


export default function Home() {
  return (
   <div className='w-full bg-white flex flex-col justify-center items-center'>
      <NavBar />
      <h1>Home</h1>
      <FirstStories />  
    </div>
  )
}
