import React, {useEffect, useState} from 'react';
import {useResultContext} from "../context/ResultContext";
import {useDebounce} from 'use-debounce'
import {AiOutlineClose} from 'react-icons/ai'

const Search = () => {

    const {getData, setSearchValue} = useResultContext()

    const [inputValue, setInputValue] = useState('')
    const [debouncedSearchValue] = useDebounce(inputValue, 800)

    useEffect(() => {
        if (debouncedSearchValue) {
            setSearchValue(debouncedSearchValue)
        }
    }, [debouncedSearchValue])


    return (
        <div className={`flex items-center justify-center w-full mb-4`}>
            <div className={`relative`}>
                <input className={`outline-none w-[400px] bg-gray-100 dark:bg-gray-300 rounded-[7px] text-[20px] px-2.5 py-1 
           dark:text-slate-800  border focus:border-b-2 focus:border-b-slate-500
            focus:rounded-b-none dark:focus:border-b-blue-400 hover:shadow-lg dark:hover:shadow-gray-300 dark:hover:shadow-md 
             transition-all duration-300 ease-in-out max-[450px]:w-[300px] max-[450px]:text-[16px]`}
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       placeholder='Start search'
                />
                {/*<button className={`bg-blue-500 px-3 py-0.5 text-[28px] text-white rounded-[10px]`}
                    onClick={() => getData('cat', 'search')}>
                Find
            </button>*/}
                {
                    inputValue ?
                        <button className={`absolute text-black text-[28px] right-2 top-1.5 max-[450px]:text-[24px]`}
                                onClick={() => setInputValue('')}>
                            <AiOutlineClose/>
                        </button>
                        :
                        null
                }

            </div>

        </div>
    );
};

export default Search;