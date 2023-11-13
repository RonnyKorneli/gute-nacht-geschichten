import Link from 'next/link'

// Make Stories show on a list with shortened content
// Make Stories clickable to go to the full Story

async function getStories() {
    try {
        const res = await fetch('http://localhost:2000/stories', {
            next: {
                revalidate: 0
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const json = await res.json();
        return json;
    } catch (error) {
        console.error("Error fetching stories:", error);
        throw error; // Rethrow the error so it can be handled elsewhere
    }
}

async function StoryList() {
    let stories = [];
    try {
        const stories = await getStories();
        // Do something with the stories data here
    } catch (error) {
        console.error("Error in StoryList:", error);
        // Handle the error as needed
    }

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
                                <p>{story.title}</p>
                            </Link>
                        </div>
                    )
                })
            }
            
        </>
    )
}

export default StoryList;