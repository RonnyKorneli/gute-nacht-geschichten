import Image from "next/image";

async function getStory(id) {
    const res = await fetch(`http://localhost:2000/api/stories/get-story/${id}`, {
        next: {
            revalidate: 60
        }
    });
  return res.json();
}

async function Story({params}){
    const id = params.id;
    const story = await getStory(id);
    console.log(id, 'idddddd inside page', params, 'params')


    return(
        <>
            <div className="w-[80%] h-[700px] relative">
                <Image
                    src={story.imageUrl}
                    className='rounded-lg m-0 object-cover object-center'
                    fill
                    placeholder='blur'
                    blurDataURL={story.imageUrl}
                    alt="Picture of the author"
                    _id={id}

                />
            </div>
            
            <p>{story.body}</p>
            
            
        </>
    )
}

export default Story;