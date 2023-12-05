'use client'
import FirstStories from '../components/firstStories.jsx'
import HeroImage from '../components/heroImage.jsx'
import WelcomeText from '../components/welcomeText.jsx'


export default function Home() {
  return (
   <div className='w-full bg-white flex flex-col justify-center items-center'>
      <HeroImage 
        imageUrl='/firstLargeImage.jpg'
        className='object-cover object-left-bottom lg:object-bottom '
        bubbleStyle="z-20 mt-[120px] w-[80%] h-[130px] font-[700] text-white bg-blue rounded-full fixed top-0 text-center flex justify-center items-center  md:w-[300px] md:h-[300px] md:mr-36 md:text-2xl md:font-[700] md:mt-[190px] md:ml-[-230px]"
      />
      
      <main className='mt-[700px] rounded-t-3xl bg-white z-30 w-full'>
        <WelcomeText />  
        <FirstStories />  
      </main>
    </div>
  )
}
