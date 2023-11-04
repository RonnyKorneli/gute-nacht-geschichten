async function getStory(id) {
    const res = await fetch('http://localhost:4000/stories/' + id, {
        next: {
            revalidate: 60
        }
    });
  return res.json();
}

async function Story({params}){
    const story = await getStory(params.id);


    return(
        <>
            <h1>Story</h1>
            {
                story.body
            }
            
        </>
    )
}

export default Story;