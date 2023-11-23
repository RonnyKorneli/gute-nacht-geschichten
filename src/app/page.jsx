import FirstStories from '../components/firstStories.jsx'
import HeroImage from '../components/heroImage.jsx'



export default function Home() {
  return (
   <div className='w-full bg-white flex flex-col justify-center items-center'>
      <h1>Home</h1>
      <HeroImage 
        imageUrl='/firstLargeImage.jpg'
        className='object-cover object-left-bottom lg:object-bottom'
      />
      <FirstStories />  
    </div>
  )
}
