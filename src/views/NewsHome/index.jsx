import React, { useState } from 'react';
import './NewsHome.css';
import NewsHomeHeader from './components/NewsHomeHeader';
import NewsHomeSideBar from './components/NewsHomeSideBar';
import NewsHomeContent from './components/NewsHomeContent';
import NewsHomeFooter from './components/NewsHomeFooter';

const NewsHome = () => {
    const [ curNavStatus, setCurNavStatus ] = useState({
        title: '',
        id: ''
    });

    return (
        <div id = "new-home-root">
            <NewsHomeHeader />
            <div className = "new-home-middle-container">
                <NewsHomeSideBar
                    curNavStatus = { curNavStatus }
                    emitFunc = { setCurNavStatus }
                />
                <NewsHomeContent
                    curNavStatus = { curNavStatus }
                />
            </div>
            <NewsHomeFooter />
        </div>
    );
};

export default NewsHome;