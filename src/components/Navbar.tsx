import React, {FC} from 'react';
import {Link} from "react-router-dom";
import Search from "./Search";

import NavigationLinks from './NavigationLinks';

interface NavbarProps {
    setDarkMode: (e: boolean) => void,
    darkMode: boolean
}

const Navbar:FC<NavbarProps> = ({darkMode, setDarkMode}) => {



    return (
        <div className={`p-6 pb-1 flex flex-wrap justify-between max-[600px]:justify-center items-center 
        border-b border-slate-300 dark:border-slate-900 max-[450px]:p-2`}>
            <div className={`flex justify-between w-full items-center mb-6`}>
                <Link to={'/'}>
                    <p className={`bg-cyan-500 text-white shadow-cyan-500 dark:shadow-cyan-400 shadow-lg text-[36px] tracking-wider
                     font-bold px-4 py-0.5 rounded-[15px] dark:text-black dark:bg-cyan-400`}>Seek</p>
                </Link>
                <button className={`text-[32px] hover:shadow-lg rounded-full`} onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌚' : '🌞'}</button>
            </div>

            <Search />
            <NavigationLinks />

        </div>
    );
};

export default Navbar;