import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {BsImages, BsNewspaper, BsSearch} from "react-icons/bs";
import {MdOndemandVideo} from "react-icons/md";

const NavigationLinks = () => {


    const location = useLocation()

    return (
        <div className={`flex items-center gap-3.5 text-[22px] px-3  max-[450px]:grid max-[450px]:grid-cols-2`}>

            <Link to={'/search'} className={`flex items-center gap-1 hover:underline max-[450px]:mx-4
            ${location.pathname === '/search' && 'underline text-blue-800 dark:text-blue-400'}`} >
                <BsSearch />
                Search
            </Link>

            <Link to={'/images'} className={`flex items-center gap-1 hover:underline max-[450px]:mx-4
            ${location.pathname === '/images' && 'underline text-blue-800 dark:text-blue-400'}`}>
                <BsImages />
                Images
            </Link>
            <Link to={'/videos'} className={`flex items-center gap-1 hover:underline max-[450px]:mx-4
            ${location.pathname === '/videos' && 'underline text-blue-800 dark:text-blue-400'}`}>
                <MdOndemandVideo />
                Videos
            </Link>
            <Link to={'/news'} className={`flex items-center gap-1 hover:underline max-[450px]:mx-4
            ${location.pathname === '/news' && 'underline text-blue-800 dark:text-blue-400'}`}>
                <BsNewspaper />
                News
            </Link>
        </div>
    );
};

export default NavigationLinks;