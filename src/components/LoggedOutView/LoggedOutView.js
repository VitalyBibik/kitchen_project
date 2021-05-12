import React from "react";
import { NavLink } from "react-router-dom";
import styles from './LoggedOutView.module.scss'
import cn from "classnames";
import PropTypes from "prop-types";

// TODO нужный компонент Side-Bar

export const LoggedOutView = ({ currentUser }) => {
    if (!currentUser) {
        return (
            <ul className={cn(styles.nav, styles.right)}>

                <li className={styles['nav-item']}>
                    <NavLink exact to="/" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        Home
                    </NavLink>
                </li>

                <li className={styles['nav-item']}>
                    <NavLink to="/login" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        Sign in
                    </NavLink>
                </li>

                <li className={styles['nav-item']}>
                    <NavLink to="/register" className={styles["nav-link"]} activeClassName={styles['nav-link_active']}>
                        Sign up
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
