import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import axios from 'axios';

interface ResultContextProviderProps {
    children: ReactNode
}


export type ResultContextType = {
    searchResults: any[],
    searchValue: string,
    setSearchValue: (e: string) => void,
    isLoading: boolean,
    getData: (e: string) => void
}

const ResultContext = createContext<ResultContextType>({
    searchResults: [],
    searchValue: '',
    setSearchValue: () => {},
    isLoading: false,
    getData: (e: string) => {}
})


export const ResultContextProvider:FC<ResultContextProviderProps> = ({children}) => {
    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getData = async (text: string) => {
        setIsLoading(true)

        /*const options = {
            method: 'GET',
            url: 'https://google-search-results-scraper.p.rapidapi.com/v1/scrapeGoogle',
            params: {
                keyword: `${text}`,
                gl: 'us',
                page: '0',
                hl: 'en',
                parse_ads: 'true',
                safe: 'false'
            },
            headers: {
                'X-RapidAPI-Key': 'b68f592795mshb2d7ff3dc7c6836p1d9ab8jsn968080316a49',
                'X-RapidAPI-Host': 'google-search-results-scraper.p.rapidapi.com'
            }
        };*/
       /* const options = {
            method: 'GET',
            url: 'http://api.serpstack.com/search?access_key=b52a889ca28cb147d87e7dd3fa68d998&',
            params: {
                keyword: `${text}`,
            },
            headers: {
                'X-RapidAPI-Key': 'b68f592795mshb2d7ff3dc7c6836p1d9ab8jsn968080316a49',
                'X-RapidAPI-Host': 'google-search-results-scraper.p.rapidapi.com'
            }
        };*/


        const options = {
            method: 'GET',
            url: 'https://real-time-web-search.p.rapidapi.com/search',
            params: {
                q: `${text}`,
                limit: '10'
            },
            headers: {
                'X-RapidAPI-Key': 'b68f592795mshb2d7ff3dc7c6836p1d9ab8jsn968080316a49',
                'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
            }
        };

        // const options = {
        //     method: 'GET',
        //     baseURL: 'http://api.serpstack.com/search?access_key=b52a889ca28cb147d87e7dd3fa68d998',
        //     params: {
        //         query: `${text}`,
        //     }
        // };

       /* const axiosAgent = axios.create({
            method: 'GET',
            baseURL: `http://api.serpstack.com/`,
            maxRedirects: 0,

        })*/

        try {
            const response = await axios.request(options)
            console.log(response.data)
            setSearchResults(response.data.data)
           // const response = await axiosAgent(`search?access_key=b52a889ca28cb147d87e7dd3fa68d998&query=${text}`)
           // const response = await fetch(`http://api.serpstack.com/search?access_key=b52a889ca28cb147d87e7dd3fa68d998&query=${text}`)
           // const data = await response.json()
          //  console.log(response.data)

           // const response = await axios.request(options)
           // const response = await axios.get(`http://api.serpstack.com/search?access_key=b52a889ca28cb147d87e7dd3fa68d998&query=${text}`)
           // console.log(response.data);
           // setSearchResults(response.data)
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }

    }



    return (
        <ResultContext.Provider value={{searchResults, searchValue, setSearchValue, isLoading, getData}}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext)

