import React from 'react';
import menu_icon from "../../src/assets/menu.png";
import logo from "../../src/assets/logo.png";
import upload from "../../src/assets/upload.png";
import profile from "../../src/assets/profile.jpeg";
import { IoSearch } from "react-icons/io5";
import { MdWidgets } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar({ setSidebar }) {
    return (
        <>
            <nav className="flex items-center justify-between p-3 bg-black shadow-md sticky top-0 z-10">
                <div className="flex items-center space-x-4">
                    {/* Menu icon that toggles sidebar */}
                    <img
                        src={menu_icon}
                        alt="Menu"
                        className="w-6 cursor-pointer"
                        onClick={() => setSidebar(prev => !prev)}
                    />
                    <Link to="/"><img src={logo} alt="Logo" className="w-32 md:w-12" /></Link>
                    <h2 className="text-white text-2xl hidden md:block font-bold">YouTube</h2>
                </div>

                <div className="flex items-center space-x-2 w-1/2 max-w-xs md:w-1/3">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-2 border rounded-md focus:outline-none"
                    />
                    <IoSearch className="text-2xl text-white" />
                </div>

                <div className="flex items-center space-x-4">
                    {/* Icons for upload, widgets, notifications, and profile */}
                    <img src={upload} alt="Upload" className="w-6 h-6 cursor-pointer" />
                    <MdWidgets className="text-xl text-white cursor-pointer" />
                    <IoIosNotifications className="text-xl text-white cursor-pointer" />
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover cursor-pointer"
                    />
                </div>
            </nav>
        </>
    );
}

export default Navbar;
