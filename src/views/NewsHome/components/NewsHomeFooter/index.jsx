import React from 'react';
import './NewsHomeFooter.css';

const NewsHomeFooter = () => {
    const footerInfoArr = [
        '隱私權和Cookie',
        '法律聲明',
        '廣告',
        '關於我們的廣告',
        '說明',
        '意見反饋'
    ];
    const footerInfoLi = footerInfoArr.map(li => (
        <li
            className = "footer-info-li"
            key = { li }
        >
            {li}
        </li>
    ));


    return (
        <div id = "news-home-footer-root">
            <ul className = "footer-info-wrap">
                {footerInfoLi }
            </ul>
            <p className = "copy-right-text">
                @2021 Microsoft
            </p>
        </div>
    );
};

export default NewsHomeFooter;