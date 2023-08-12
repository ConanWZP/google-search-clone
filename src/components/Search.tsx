import React from 'react';
import {useResultContext} from "../context/ResultContext";

const Search = () => {

    const {getData} = useResultContext()

    return (
        <div className={`flex gap-10 items-center ml-[50%] `}>
            <span>Search</span>
            <button className={`bg-blue-500 px-3 py-0.5 text-[28px] text-white rounded-[10px]`} onClick={() => getData('cat')}>Find</button>
        </div>
    );
};

export default Search;