import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {AvatarIcon, EditIcon, HomeIcon, SettingIcon} from "../Icons";
import styles from './LoggedInView.module.scss'
import cn from "classnames";

// TODO нужный компонент Side-Bar Сделать наведение активной ссылки, Сделать нормальное наведение

export const LoggedInView = ({ currentUser }) => {
    if (currentUser) {
        return (
            <ul className={cn("nav navbar-nav", styles.right)}>

                <li className={styles['nav-item']}>
                    <Link to="/" className="nav-link">
                       <span className={styles.mini}><HomeIcon />Главная</span>
                    </Link>
                </li>

                <li className={styles['nav-item']}>
                    <Link to="/editor" className="nav-link">
                        <span className={styles.mini}><EditIcon />Новая запись</span>
                    </Link>
                </li>

                <li className={styles['nav-item']}>
                    <Link to="/settings" className="nav-link">
                        <span className={styles.mini}><SettingIcon />Настройки</span>
                    </Link>
                </li>

                <li className={styles['nav-item']}>
                    <Link
                        to={`/@${currentUser.username}`}
                        className="nav-link">
                        <span className={styles.mini}> {currentUser.image ? <img src={currentUser.image} className={styles.img} alt={'UserImage'}/> : <AvatarIcon /> }
                            {currentUser.username}
                        </span>
                    </Link>
                </li>

            </ul>
        );
    }

    return null;
};

LoggedInView.propTypes = {
    currentUser: PropTypes.object
}


