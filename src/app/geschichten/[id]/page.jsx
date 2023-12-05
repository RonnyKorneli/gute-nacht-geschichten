import Image from "next/image";
import FirstStories from "../../../components/firstStories.jsx";
import HtmlRenderer from '../../../components/htmlRender.jsx'

async function getStory(id) {
    const res = await fetch(`http://localhost:2000/api/stories/get-story/${id}`, {
        next: {
            revalidate: 60
        }
    });
  return res.json();
}

async function Story({params}){

    const id = await params.id;
    const story = await getStory(id);
    const storyBody =  await story.body;
    const storyIntroduction = await story.introduction;


    console.log(typeof storyBody, 'story inside story.jsx');

    return(
        <>  
            <div className="w-full flex flex-col justify-center items-center prose md:max-w-full">
                <div className="w-full flex flex-col justify-center items-center rounded-2xl prose md:max-w-full">
                    <h1 className="text-4xl md:text-6xl text-center w-[90%] md:w-[600px] font-[700] mt-32 mb-10">{story.title}</h1>
                    <div className="w-full h-[400px] md:h-[500px] rounded-4xl md:w-2/3 relative mb-6">
                        <Image
                            src={story.imageUrl}
                            className='m-0 object-cover object-center rounded-2xl'
                            fill
                            placeholder='blur'
                            blurDataURL={story.imageUrl}
                            alt="Picture of the author"
                            _id={id}
        
                        />
                    </div>
                </div>
                <div className="flex justify-center w-[95%] md:w-[70%] text-2xl font-[200]">
                    <HtmlRenderer htmlContent={{ __html: storyIntroduction}} />
                </div>
                <div className="flex justify-center w-[95%] md:w-[70%] text-2xl font-[500]">
                    <HtmlRenderer htmlContent={{ __html: storyBody}} />
                </div>
                <FirstStories />

            </div>
        </>
    )
}

export default Story;