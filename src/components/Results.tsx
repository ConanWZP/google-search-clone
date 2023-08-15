import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useResultContext} from "../context/ResultContext";
import Loader from "./Loader";
import ReactPlayer from "react-player";
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineClose } from 'react-icons/ai';

const Results = () => {

    const [isShowed, setIsShowed] = useState(false)
    const [photoId, setPhotoId] = useState(0)
    const location = useLocation()
    console.log(location.pathname)
    const {searchResults, setSearchValue, searchValue, isLoading, getData} = useResultContext()

    const openPhoto = (id: number) => {
        document.body.classList.add('blockScroll')

        setIsShowed(true)
        setPhotoId(id)

    }

    const closePhoto = () => {
        setIsShowed(false)
        document.body.classList.remove('blockScroll')
    }

    // console.log(searchValue)

    /*searchResults.map(({id, title, thumbnail_url, url}) => (
        <div key={id} className={`p-5`}>
            <img src={thumbnail_url} alt={title}/>
            <p className={`sm:w-36 w-36 break-words text-sm mt-2`}>{title}</p>
        </div>
    ))*/

    /*let testFunc = () => {

        for (let i = 0; i < searchResults.length; i++) {

        }


    }
*/

    useEffect(() => {
        //   getData('mcdonalds', 'search')
        if (searchValue !== '') {
            if (location.pathname === '/search') {
                 getData(searchValue, 'search')
            } else if (location.pathname === '/images') {
                  getData(searchValue, 'images')
            } else if (location.pathname === '/news') {
                 getData(searchValue, 'news')
            } else if (location.pathname === '/videos') {
                getData(searchValue, 'videos')
            }
        }


    }, [location.pathname, searchValue])

    if (isLoading) {
        return <Loader/>
    }

    if (searchResults.length === 0) {
        return (
            <div className={`fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]`}>
                <p className={`text-[44px] text-gray-400 font-bold text-center`}>Let's find something</p>
            </div>
        )
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
                                        {url?.length > 30 ? url.substring(0, 30) : url}
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
                <div className={`flex flex-wrap items-center justify-center max-w-[800px] mx-auto px-2 max-[450px]:px-1`}>
                    {
                        searchResults.map(({title, link, photo_url, source_url, source_logo_url}, index) => (
                            <div key={index} className={`w-full flex gap-3 my-5 max-[900px]:justify-center`}>
                                <div className={`flex flex-col items-start`}>
                                    <div className={`flex items-center ${source_url ? 'gap-2' : ''}`}>
                                        {source_url ? <img className={`max-w-[50px] object-contain max-[700px]:hidden`}
                                                           src={source_logo_url}/> : null}
                                        <a className={`max-[450px]:text-[12px]`} href={source_url}>{source_url}</a>
                                    </div>
                                    <a className={`w-[480px] break-words hover:underline text-blue-800 text-[24px] dark:text-blue-400 max-[700px]:w-[60vw] max-[700px]:text-[20px]`}
                                       href={link}>{title}</a>
                                </div>
                                <div>
                                    {
                                        photo_url ?
                                            <img src={photo_url} className={`w-[150px] h-[150px] rounded-[10px] max-[700px]:w-[100px] max-[700px]:h-[100px] max-[400px]:w-[80px] max-[400px]:h-[80px]`}
                                                 alt={`title`}/>
                                            :
                                            <div className={`w-[150px] h-[150px] rounded-[10px] bg-cyan-400 max-[700px]:w-[100px] max-[700px]:h-[100px] max-[400px]:w-[80px] max-[400px]:h-[80px]`}></div>
                                    }

                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        case '/images':
            return (
                <div className={`flex flex-wrap items-center justify-between relative max-[550px]:justify-center`}>
                    {
                        searchResults.map(({id, title, thumbnail_url, url, source_url}, index) => (
                            <div key={id} className={`p-5 flex flex-col items-center`}>
                                <img src={thumbnail_url} alt={title} className={`hover:cursor-pointer`}
                                     onClick={() => openPhoto(index)}/>
                                <a href={source_url} className={`sm:w-36 w-36 break-words text-sm mt-2`}>{title}</a>
                            </div>
                        ))
                    }
                    {
                        isShowed ?
                            <div className={`mx-auto flex items-center justify-center overlay relative dark:text-white`}>
                                <button className={`w-[50px] h-[50px] rounded-full flex justify-center items-center 
                                text-[32px] bg-cyan-400 dark:bg-cyan-500 max-[768px]:w-[40px] max-[768px]:h-[40px] max-[768px]:text-[24px]
                                buttonLeft`} onClick={() => setPhotoId(photoId-1)}>
                                    <AiFillCaretLeft />
                                </button>
                                <img className={`w-[70vw] max-h-[100vh] max-[768px]:w-[90vw] imageStyles`} src={searchResults[photoId].url} />
                                <button className={`w-[50px] h-[50px] rounded-full flex justify-center items-center
                                 text-[32px] bg-cyan-400 dark:bg-cyan-500 max-[768px]:w-[40px] max-[768px]:h-[40px] max-[768px]:text-[24px]
                                 buttonRight`} onClick={() => setPhotoId(photoId+1)}>
                                    <AiFillCaretRight />
                                </button>
                                <button className={`w-[50px] h-[50px] bg-cyan-400 dark:bg-cyan-500 
                                absolute top-6 right-5 max-[450px]:top-4 max-[450px]:right-3 buttonClose`} onClick={() => closePhoto()}>
                                    <AiOutlineClose />
                                </button>
                            </div>
                            :
                            null
                    }

                </div>
            )
        case '/videos':
            return (
                <div className={`flex flex-wrap justify-center `}>
                    {searchResults.map(({video}, index) => (

                        video?.videoId ?
                            <div key={index} className={`p-2 max-[400px]:px-1`}>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.videoId}`} controls={true}
                                             width={'300px'} height={'200px'}/>
                            </div>
                            : null

                    ))}
                </div>
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