import React, { useState } from "react";

export default function UploadImageToS3(){

    const [file, setFile] = useState(null);
    console.log(file, 'filekjhgkjhkjhkjh');

    const handleFileChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        setFile(file);

        console.log(file, "chnges herererererer");
        
    }

    const uploadFile = async (e) => {
         //Get secure url from server
         e.preventDefault();
         try {
            //getting signed url from server
            const {url} = await fetch('http://localhost:2000/api/stories/s3Url').then(res => res.json());
            console.log(url);
            //Upload image to S3
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': "multi-part/form-data"
                },
                body: file
            });
            const imageUrl = url.split('?')[0];
            console.log(imageUrl);

        } catch (error) {
            console.error("Error uploading image!", error);
            throw error;
        }
       
        //Save image url to database
    }

    return (
        <div className="App">
            <form 
                action=""
                name="uploadImage"
            >
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleFileChange} 
                        name="image-file"
                    />
                    <button onClick={uploadFile}>Upload</button>
            </form>
        </div>
      );
}