import React from 'react';
import {InfinitySpin} from 'react-loader-spinner'

const Loader = () => {
    return (

            <div className={`fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]`}>
                <InfinitySpin
                    width='200'

                    color="#4fa94d"
                />
            </div>


    );
};

export default Loader;