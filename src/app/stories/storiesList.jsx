import Link from 'next/link'

// Make Stories show on a list with shortened content
// Make Stories clickable to go to the full Story

async function getStories() {
    const res = await fetch('http://localhost:4000/stories', {
        next: {
            revalidate: 0
        }
    });
    return res.json();
}

async function StoryList() {
    const stories = await getStories();

    return(
        <>
            <h1>Stories List</h1>
            {
                stories.map((story) => {
                    return (
                        <div key={story.id}>
                            <Link 
                                className="text-blue-500 border-b border-blue-500 hover:border-blue-800 hover:text-blue-800"
                                href={`/stories/${story.id}`}
                            >
                                <h2 className="text-xl">{story.title}</h2>
                                <p>{story.body.slice(0,500)}...</p>
                            </Link>
                        </div>
                    )
                })
            }
            
        </>
    )
}

export default StoryList;