import React from 'react';
import NavBar from './NavBar';
import { useEffect,useState } from 'react';

const apiKey = process.env.REACT_APP_APIKEY;

export default function Photo() {
    const [photoData, setPhotoData] = useState(null);
    
    useEffect(() => {
        fetchtPhoto();

        async function fetchtPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, [])

    if(!photoData){ return <div><h1>.. Loading</h1></div>}

    return (
        <>
            <NavBar />
            <div className="nasa-photo">
                {
                    photoData.media_type === "image" ? (
                        <img className="photo" src={photoData.url} alt={photoData.title} />
                    ):
                    (
                        <iframe
                            title={photoData.title}
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                    ) 
                }
                <div>
                    <h1>{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    );
}