import React, {  useEffect }from 'react';
import './NewsHomeSideBar.css';
import HomeIcon from '../../../../static/images/home.png';
import navBarList from './navBarList';
import {
    useSearchParams,
} from 'react-router-dom';

const NewsHomeSideBar = ({
    curNavStatus,
    emitFunc
}) => {
    const [ , setSearchParams ] = useSearchParams();
    // 導覽列表active class
    const newsNavLiClass = id => {
        return    curNavStatus.id === id
            ? 'news-nav-li nav-info-selected'
            : 'news-nav-li';
    };
    // 導覽列表圖片active class
    const newsNavImgClass = id => {
        return curNavStatus.id === id
            ? 'news-nav-icon nav-img-selected'
            : 'news-nav-icon';
    };
    // 導覽列表點擊邏輯
    const navLiClickHandler = ({title, id}) => {
        setSearchParams({
            category: id
        });
        emitFunc({ title, id });
    };
    const navBarLi = navBarList.map(({ title, id }) => (
        <li
            className = { newsNavLiClass(id) }
            key = { id }
            onClick = {
                () => {
                    navLiClickHandler({title, id});
                }
            }
        >
            <img
                src = { HomeIcon }
                className = { newsNavImgClass(id) }
            />
            <p className = "news-nav-text">
                { title }
            </p>
        </li>
    ));
    // mount時點選當前導覽列表第一項
    useEffect(() => {
        navLiClickHandler(navBarList[0]);
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