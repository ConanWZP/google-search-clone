import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useResultContext} from "../context/ResultContext";
import Loader from "./Loader";

const Results = () => {

    const location = useLocation()

    const {searchResults, setSearchValue, searchValue, isLoading, getData} = useResultContext()
   // console.log(searchValue)

    useEffect(() => {
     //   getData('mcdonalds')
    }, [])

    if (isLoading) {
        return <Loader />
    }

    switch (location.pathname) {
        case '/search':
            return (
                <div className={`flex flex-wrap justify-between my-6 max-w-[800px] mx-auto px-2`}>
                    {searchResults.map(({title, snippet, url, domain, position}) => (
                        <div key={position} className={`w-full my-5`}>
                            <a href={url}>
                                <div className={`flex flex-col `}>
                                    <p className={`text-[12px]`}>
                                        {domain}
                                    </p>
                                    <p className={`text-[14px]`}>
                                        {url.length > 30 ? url.substring(0, 30) : url}
                                    </p>
                                </div>

                                <p className={`hover:underline text-blue-800 text-[24px] dark:text-blue-400 `}>
                                    {title}
                                </p>
                            </a>
                            <div>
                                <p>
                                    {snippet}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        case '/news':
            return (
                <div>news</div>
            )
        case '/images':
            return (
                <div>images</div>
            )
        case '/videos':
            return (
                <div>videos</div>
            )

        default:
            return (
                <div>error</div>
            )
    }

    /*return (
        <div>
            <div className={`h-[500px] w-[500px] bg-cyan-100`}></div>
            <div className={`h-[500px] w-[500px] bg-cyan-100`}></div>
        </div>
    );*/
};

export default Results;