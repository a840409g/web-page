import React from 'react';
import './NewsHomeHeader.css';
import Logo from '../../../../static/images/Bing-logo.png';
import Search from '../../../../static/images/search.png';

const NewsHomeHeader = () => {
    return (
        <div id = "news-home-header-root">
            <img
                src = { Logo }
                className = "news-logo"
            />
            <div className = "news-search-input-bar">
                <input
                    type = "text"
                    placeholder = "熱門搜尋"
                    className = "news-search-input"
                />
                <img
                    src = { Search }
                    className = "search-icon"
                />
            </div>
        </div>
    );
};

export default NewsHomeHeader;