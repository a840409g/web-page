import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsHomeContent.css';
import NewsContentCard from './components/NewsContentCard';

const newsApi = 'https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79';

const NewsHomeContent = ({
    curNavStatus
}) => {
    const [ newsData, setNewsData ] = useState([]);
    const newsContentCardMap = newsData.map(props => (
        <NewsContentCard
            key = { props.title }
            publishInfo = { props.title }
            bannerUrl = { props.urlToImage }
            publishTime = { props.publishedAt }
        />
    ));

    useEffect(() => {
        const fetchNewsData = async () => {
            const { articles } = await (await axios.get(newsApi)).data;

            setNewsData(articles);
        };

        fetchNewsData();
    }, []);

    return (
        <div id = "news-home-content-root">
            <div className = "new-home-content-header">
                <p className = "cur-nav-title">
                    { curNavStatus.title }
                </p>
                <p className = "news-support-text">
                    由Microsoft News支援
                </p>
            </div>
            <div className = "news-home-content-wrap">
                { newsContentCardMap }
            </div>
        </div>
    );
};

NewsHomeContent.propTypes = {
    curNavStatus: () => null
};

export default NewsHomeContent;