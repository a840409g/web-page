import React, { useState, useEffect }from 'react';
import './NewsHomeSideBar.css';
import HomeIcon from '../../../../static/images/home.png';
import navBarList from './navBarList';

const NewsHomeSideBar = () => {
    const [ curNavStatus, setCurNavStatus ] = useState('');
    const newsNavLiClass = id => {
        return    curNavStatus === id
            ? 'news-nav-li nav-info-selected'
            : 'news-nav-li';
    };
    const navBarLi = navBarList.map(({title, id}) => (
        <li
            className = { newsNavLiClass(id) }
            key = { id }
            onClick = {
                () => {
                    setCurNavStatus(id);
                }
            }
        >
            <img
                src = { HomeIcon }
                className = "news-nav-icon"
            />
            <p className = "news-nav-text">
                { title }
            </p>
        </li>
    ));

    useEffect(() => {
        setCurNavStatus(navBarList[0].id);
    }, []);

    return (
        <div id = "news-home-sideBar-root">
            { navBarLi }
        </div>
    );
};

export default NewsHomeSideBar;