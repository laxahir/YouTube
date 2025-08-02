import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../data';

function Recommended({ categoryId }) {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`; // Replace with your actual URL
        await fetch(relatedVideo_url)
            .then(res => res.json(data))
            .then(data => setApiData(data.items));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="space-y-6">
            {apiData.map((item, index) => (
                <Link
                    to={`/video/${item.snippet.categoryId}/${item.id}`}
                    key={index}
                    className="flex bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden transition-all duration-200 ease-in-out"
                >

                    <img
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                        className="w-52 h-40 object-cover"
                    />


                    <div className="flex flex-col p-4 w-full">

                        <h4 className="text-lg font-semibold text-white truncate">{item.snippet.title}</h4>

                        <div className="mt-2">

                            <p className="text-sm text-gray-400">{item.snippet.channelTitle}</p>

                            <p className="text-sm text-gray-400">{value_converter(item.statistics.viewCount)} views</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Recommended;
