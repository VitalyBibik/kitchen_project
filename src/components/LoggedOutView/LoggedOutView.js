import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from './LoggedOutView.module.scss'
import cn from "classnames";
import PropTypes from "prop-types";
import { HomeIcon, LoginIcon, RegisterIcon } from "../Icons";


export const LoggedOutView = ({ currentUser }) => {

    const { pathname } = useLocation()
    const baseSvg = '#B8B8B8'
    const activeSvg = '#EBEBEB'

    if (!currentUser) {
        return (
            <ul className={cn(styles.nav, styles.right)}>

                <li className={styles['nav-item']}>
                    <NavLink exact to="/" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        <span className={styles.mini}><HomeIcon stroke={pathname === '/' ? activeSvg : baseSvg }  />Главная</span>
                    </NavLink>
                </li>

                <li className={styles['nav-item']}>
                    <NavLink to="/login" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                         <span className={styles.mini}><LoginIcon stroke={pathname === '/login' ? activeSvg : baseSvg }  />Войти</span>
                    </NavLink>
                </li>

                <li className={styles['nav-item']}>
                    <NavLink to="/register" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        <span className={styles.mini}><RegisterIcon stroke={pathname === '/register' ? activeSvg : baseSvg }  />Зарегистрироваться</span>
                    </NavLink>
                </li>

            </ul>
        );
    }
    return null;
};

LoggedOutView.propTypes = {
    currentUser: PropTypes.object
}
