import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className={`text-center p-5 mt-5 bg-slate-300 dark:bg-slate-900`}>
            <h2 className={`text-[24px] font-bold `}>Seek, © All rights reserved, {year}</h2>
        </div>
    );
};

export default Footer;