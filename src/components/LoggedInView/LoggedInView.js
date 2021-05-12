import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AvatarIcon, EditIcon, HomeIcon, SettingIcon } from "../Icons";
import styles from './LoggedInView.module.scss'
import cn from "classnames";

// TODO нужный компонент Side-Bar Сделать наведение активной ссылки, Сделать нормальное наведение

export const LoggedInView = ({ currentUser }) => {

    const { pathname } = useLocation()
    const baseSvg = '#B8B8B8'
    const activeSvg = '#EBEBEB'

    if (currentUser) {
        return (
            <ul className={cn(styles.nav, styles.right)}>

                <li className={styles['nav-item']}>
                    <NavLink exact to="/" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        <span className={styles.mini}><HomeIcon stroke={pathname === '/' ? activeSvg : baseSvg }  />Главная</span>
                    </NavLink>
                </li>

                <li className={styles['nav-item']}>
                    <NavLink to="/editor" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        <span className={styles.mini}><EditIcon stroke={pathname === '/editor' ? activeSvg : baseSvg }  />Новая запись</span>
                    </NavLink>
                </li>

                <li className={styles['nav-item']}>
                    <NavLink to="/settings" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        <span className={styles.mini}><SettingIcon stroke={pathname === '/settings' ? activeSvg : baseSvg }  />Настройки</span>
                    </NavLink>
                </li>

                <li className={styles['nav-item']}>
                    <NavLink
                        to={`/@${currentUser.username}`}
                        className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        <span className={styles.mini}> {currentUser.image ? <img src={currentUser.image} className={styles.img} alt='UserImage' /> : <AvatarIcon />}
                            {currentUser.username}
                        </span>
                    </NavLink>
                </li>

            </ul>
        );
    }

    return null;
};

LoggedInView.propTypes = {
    currentUser: PropTypes.object
}


