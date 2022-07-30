import React, { useState } from 'react';
import './NewsHome.css';
import NewsHomeHeader from './components/NewsHomeHeader';
import NewsHomeSideBar from './components/NewsHomeSideBar';
import NewsHomeContent from './components/NewsHomeContent';
import NewsHomeFooter from './components/NewsHomeFooter';

const NewsHome = () => {
    // 當前導覽列點選項目
    const [ curNavStatus, setCurNavStatus ] = useState({
        title: '',
        id: ''
    });

    return (
        <div id = "new-home-root">
            {/* 新聞業標頭 */}
            <NewsHomeHeader />
            <div className = "new-home-middle-container">
                {/* 新聞頁側邊欄 */}
                <NewsHomeSideBar
                    curNavStatus = { curNavStatus }
                    emitFunc = { setCurNavStatus }
                />
                {/* 新聞頁內容馴染 */}
                <NewsHomeContent
                    curNavStatus = { curNavStatus }
                />
            </div>
            {/* 新聞頁footer */}
            <NewsHomeFooter />
        </div>
    );
};

export default NewsHome;