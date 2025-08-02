import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../data';
import { value_converter } from '../data';
import moment from 'moment';

function Feed({ sidebar, category }) {
    const [data, setData] = useState([]);


    const fetchData = async () => {
        const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

        await fetch(videoList_URL).then(res => res.json()).then(data => setData(data.items))
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className={`ml-52 p-4 h-full bg-black ${sidebar ? "" : "-ml-32"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {data.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={`video/${item.snippet.categoryId}/${item.id}`}
                            className="flex flex-col space-y-2"
                        >
                            <div className="w-full h-36 bg-gray-800 rounded-md overflow-hidden">
                                <img
                                    src={item.snippet.thumbnails.medium.url}
                                    alt={item.snippet.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <h2 className="text-xl font-semibold text-white">{item.snippet.title}</h2>
                                <h3 className="text-sm text-gray-400">{item.snippet.channelTitle}</h3>
                                <p className="text-sm text-gray-500">
                                    {value_converter(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Feed;







{/* ***************** */ }
{/* {
                    videos.map((video, index) => (
                        <div key={index} className="flex flex-col space-y-2">
                            <Link to={`/video`} className="flex flex-col space-y-2">
                                <div className="w-full h-52 bg-gray-800 rounded-md overflow-hidden">
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <h2 className="text-xl font-semibold text-white">{video.title}</h2>
                                    <h3 className="text-sm text-gray-400">{video.channel}</h3>
                                    <p className="text-sm text-gray-500">{video.views} &bull; {video.time}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                } */}

// const videos = [
//     { thumbnail: thumbnail1, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail2, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail3, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail4, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail5, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail6, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail7, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail8, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail1, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail2, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail3, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail4, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail5, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail6, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail7, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
//     { thumbnail: thumbnail8, title: "Best channel to learn that help you to be a web developer", channel: "GreatStack", views: "15k views", time: "2 days ago" },
// ];