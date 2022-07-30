import React, {  useEffect }from 'react';
import './NewsHomeSideBar.css';
import HomeIcon from '../../../../static/images/home.png';
import navBarList from './navBarList';

const NewsHomeSideBar = ({
    curNavStatus,
    emitFunc
}) => {
    const newsNavLiClass = id => {
        return    curNavStatus === id
            ? 'news-nav-li nav-info-selected'
            : 'news-nav-li';
    };
    const navBarLi = navBarList.map(({ title, id }) => (
        <li
            className = { newsNavLiClass(id) }
            key = { id }
            onClick = {
                () => {
                    emitFunc({ title, id });
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
        emitFunc(navBarList[0]);
    }, []);

    return (
        <div id = "news-home-sideBar-root">
            { navBarLi }
        </div>
    );
};

NewsHomeSideBar.propTypes = {
    curNavStatus: () => null,
    emitFunc: () => {}
};

export default NewsHomeSideBar;