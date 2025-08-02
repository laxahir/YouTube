import React, { useEffect, useState } from 'react';
import like from "../../src/assets/like.png";
import dislike from "../../src/assets/dislike.png";
import share from "../../src/assets/share.png";
import save from "../../src/assets/save.png";
import { API_KEY, value_converter } from '../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

function PlayVideo() {

    const { videoId } = useParams()
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(VideoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOtherData = async () => {

        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]));

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY} `
        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData();
    }, [apiData])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])

    return (
        <div className="container mx-auto p-4">
            {/* Video Section */}
            <div className="video-container mb-6 h-[600px]">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className='w-full h-full'
                ></iframe>
                <h3 className="mt-6 text-xl font-semibold text-white">

                    {apiData ? apiData.snippet.title : "Title Here"}
                </h3>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-white">

                        {apiData ? value_converter(apiData.statistics.viewCount) : "16k"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
                    </p>
                    <div className="flex space-x-4">
                        <span className="flex items-center space-x-1">
                            <img className="w-5 h-5" src={like} alt="like" />
                            <span className='text-white'>
                                {apiData ? value_converter(apiData.statistics.likeCount) : ""}
                            </span>
                        </span>
                        <span className="flex items-center space-x-1">
                            <img className="w-5 h-5" src={dislike} alt="dislike" />
                            <span className='text-white'>8</span>
                        </span>
                        <span className="flex items-center space-x-1 cursor-pointer">
                            <img className="w-5 h-5" src={share} alt="share" />
                            <span className='text-white'>Share</span>
                        </span>
                        <span className="flex items-center space-x-1 cursor-pointer">
                            <img className="w-5 h-5" src={save} alt="save" />
                            <span className='text-white'>Save</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Channel Section */}
            <div className="flex items-center space-x-4 mb-6 mt-28">
                <img className="w-12 h-12 rounded-full" src={channelData ? channelData.snippet.thumbnails.default.url : ""}
                    alt="channel" />
                <div>
                    <p className="text-lg font-semibold text-white">
                        {apiData ? apiData.snippet.channelTitle : ""}
                    </p>
                    <span className="text-sm text-white">
                        {channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} &nbsp;
                        Subscribers</span>
                </div>
                <button className="ml-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">
                    Subscribe
                </button>
            </div>

            <div className="space-y-4">
                <p className="text-white">
                    {apiData ? apiData.snippet.description.slice(0, 250) : "Desescription Here"}
                </p>
                <hr />

                <hr className="my-4 border-t border-gray-700" />

                <h4 className="text-lg font-semibold text-white">
                    {apiData ? value_converter(apiData.statistics.commentCount) : 102} &nbsp;
                    Comments</h4>

                {/* Comments Section */}
                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="flex items-start space-x-4 border-t py-4">
                            <img className="w-10 h-10 rounded-full" src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user" />
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-white">
                                    {item.snippet.topLevelComment.snippet.authorDisplayName} &bull; <span className="text-sm text-white">1 day ago</span>
                                </h3>
                                <p className="text-white">
                                    {item.snippet.topLevelComment.snippet.textDisplay}
                                </p>
                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="flex items-center space-x-1 cursor-pointer">
                                        <img className="w-5 h-5" src={like} alt="like" />
                                        <span className='text-white'>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    </span>
                                    <span className="flex items-center space-x-1 cursor-pointer">
                                        <img className="w-5 h-5" src={dislike} alt="dislike" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default PlayVideo;
