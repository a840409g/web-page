import React from 'react';
import './NewsHomeContent.css';

const NewsHomeContent = ({
    curNavStatus
}) => {
    return (
        <div id = "news-home-content-root">
            { curNavStatus.title }
            { curNavStatus.id}
        </div>
    );
};

NewsHomeContent.propTypes = {
    curNavStatus: () => null
};

export default NewsHomeContent;