import React from 'react';
import home from "../../src/assets/home.png";
import game_icon from "../../src/assets/game_icon.png";
import automobile from "../../src/assets/automobiles.png";
import sports from "../../src/assets/sports.png";
import entertainment from "../../src/assets/entertainment.png";
import tech from "../../src/assets/tech.png";
import music from "../../src/assets/music.png";
import blogs from "../../src/assets/blogs.png";
import news from "../../src/assets/news.png";
import jack from "../../src/assets/jack.png";
import simon from "../../src/assets/simon.png";
import tom from "../../src/assets/tom.png";
import megan from "../../src/assets/megan.png";
import cameron from "../../src/assets/cameron.png";

function Sidebar({ sidebar, category, setCategory }) {
    return (
        <div
            className={`
                ${sidebar ? "w-52" : "w-20"} 
                flex flex-col bg-black text-white h-screen p-4 space-y-4 fixed top-0 left-0 lg:block md:hidden mt-[4rem] overflow-y-auto`}
        >
            {/* Menu items */}
            <div className="space-y-2">
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer  border-b-red-600 ${category === 0 ? "border-b border-red-500 " : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="Home" className="w-6 h-6  border-b-red-600" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Home</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 20 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game_icon} alt="Gaming" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Gaming</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 2 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobile} alt="Automobiles" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Automobiles</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 17 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt="Sports" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Sports</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 24 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="Entertainment" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Entertainment</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 28 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt="Technology" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Technology</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 10 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt="Music" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Music</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 22 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogs} alt="Blogs" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Blogs</p>
                </div>
                <div className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ${category === 25 ? "border-b border-red-500" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="News" className="w-6 h-6" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>News</p>
                </div>
                <hr className="border-gray-600" />
            </div>

            {/* Subscribed Users */}
            <div className="space-y-2">
                <h3 className={`${!sidebar ? "hidden" : ""} text - lg font - semibold`}>Subscribed</h3>
                <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                    <img src={jack} alt="PewDiePie" className="w-6 h-6 rounded-full" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>PewDiePie</p>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                    <img src={simon} alt="MrBeast" className="w-6 h-6 rounded-full" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>MrBeast</p>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                    <img src={tom} alt="Justin Bieber" className="w-6 h-6 rounded-full" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Justin Bieber</p>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                    <img src={megan} alt="5-Minute Crafts" className="w-6 h-6 rounded-full" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>5-Minute Crafts</p>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                    <img src={cameron} alt="Nas Daily" className="w-6 h-6 rounded-full" />
                    <p className={`${!sidebar ? "hidden" : ""} text - sm`}>Nas Daily</p>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;
