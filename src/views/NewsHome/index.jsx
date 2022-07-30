import React from 'react';
import './NewsHome.css';
import NewsHomeHeader from './components/NewsHomeHeader';
import NewsHomeSideBar from './components/NewsHomeSideBar';
import NewsHomeContent from './components/NewsHomeContent';
import NewsHomeFooter from './components/NewsHomeFooter';

const NewsHome = () => {
    return (
        <div id = "new-home-root">
            <NewsHomeHeader />
            <div className = "new-home-middle-container">
                <NewsHomeSideBar />
                <NewsHomeContent />
            </div>
            <NewsHomeFooter />
        </div>
    );
};

export default NewsHome;