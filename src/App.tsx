import React, {useState} from 'react';
import './App.scss'
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Results from "./components/Results";


const App = () => {

    const [darkMode, setDarkMode] = useState(false)



    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className={`bg-grey-50 dark:bg-slate-700 min-h-screen flex flex-col dark:text-slate-200`}>
                <BrowserRouter>
                    <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
                   {/* <button onClick={() => getData()}>Click</button>*/}
                    <div className={`flex-auto `}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'/search'}/>}/>
                            {
                                ['/search', '/images', '/news', '/videos'].map((road) => (
                                    <Route key={'One'} path={road} element={<Results/>}/>
                                ))
                            }
                            {/*
                            The fixed key is a "hack" that's only needed for specific cases where your users have a way to
                            switch between the URLs internally and/or if the component is heavy. Using the same key for all
                            routes in the Array tells React that the component didn't unmount when React Router switches
                            routes and that only the props changed, this way React doesn't re-render the entire branch. It
                            works because React Router never renders two routes at any point in time.
                            */}
                        </Routes>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </div>

        </div>
    )

};

export default App;
