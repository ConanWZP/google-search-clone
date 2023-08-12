import React, {FC} from 'react';
import {Link} from "react-router-dom";
import Search from "./Search";

interface NavbarProps {
    setDarkMode: (e: boolean) => void,
    darkMode: boolean
}

const Navbar:FC<NavbarProps> = ({darkMode, setDarkMode}) => {
    return (
        <div className={`p-6 pb-1 flex flex-wrap justify-between max-[600px]:justify-center items-center border-b border-slate-300 dark:border-slate-900`}>
            <div className={`flex justify-between w-full items-center`}>
                <Link to={'/'}>
                    <p className={`bg-cyan-500 text-white shadow-cyan-500 dark:shadow-cyan-400 shadow-lg text-[36px] tracking-wider
                     font-bold px-4 py-0.5 rounded-[15px] dark:text-slate-700 dark:bg-cyan-400`}>Seek</p>
                </Link>
                <button className={`text-[32px] hover:shadow-lg rounded-full`} onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌚' : '🌞'}</button>
            </div>

            <Search />
            {/*Delete wrapper and context before*/}
            <div className={`flex items-center gap-3 text-[22px]`}>
                <Link to={'/search'}>search</Link>
                <Link to={'/news'}>news</Link>
                <Link to={'/images'}>images</Link>
                <Link to={'/videos'}>videos</Link>
            </div>


        </div>
    );
};

export default Navbar;