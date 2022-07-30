import React from 'react';
import './NewsContentCard.css';
import moment from 'moment';

const NewsContentCard = ({
    publishInfo = '',
    bannerUrl = '',
    publishTime = '',
}) => {
    // 分出新聞標題跟出版社
    const [ newsTitle, newsPublisher ] = publishInfo.split('-');
    // 取得報導經過時間
    const publishTimeMinText = () => {
        const publishTimeDiffWithCurTime = moment().diff(publishTime, 'minutes');
        let timeTextPrefix = '';
        let timeTextSuffix = '';

        switch (+publishTimeDiffWithCurTime >= 60) {
        case true:
            timeTextPrefix = Math.floor(publishTimeDiffWithCurTime / 60);
            timeTextSuffix = '小時';
            break;
        default:
            timeTextPrefix = publishTimeDiffWithCurTime;
            timeTextSuffix = '分鐘';
            break;
        }

        return `${timeTextPrefix}${timeTextSuffix}`;
    };

    return (
        <div id = "news-content-card-root">
            {/* 新聞圖片與標題區塊 */}
            <div className = "news-content-card-top">
                <img
                    src = { bannerUrl }
                    alt = { publishInfo }
                    className = "news-content-card-banner"
                />
                <h3 className = "news-content-card-inner-title">
                    {newsTitle}
                </h3>
            </div>
            {/* 出版社資訊與經過時間 */}
            <div className = "news-content-card-public-info">
                <p className = "news-content-card-publisher">
                    {newsPublisher}
                </p>
                <p className = "news-content-card-publish-time">
                    { publishTimeMinText() }
                </p>
            </div>
        </div>
    );
};

NewsContentCard.propTypes = {
    publishInfo: () => '',
    bannerUrl: () => '',
    publishTime: () => ''
};

export default NewsContentCard;