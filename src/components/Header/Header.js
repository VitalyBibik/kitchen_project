import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoggedOutView } from "../LoggedOutView";
import { LoggedInView } from "../LoggedInView";
import styles from './Header.module.scss'
import cn from "classnames";

// TODO нужный компонент Side-Bar

export const Header = ({ appName, currentUser }) => {
    return (
        <nav className={cn(styles.ground)}>
            <div className={styles.container}>
                <Link to="/" className={styles["navbar-brand"]}>
                    {appName()}
                </Link>
                <LoggedOutView currentUser={currentUser} />
                <LoggedInView currentUser={currentUser} />
            </div>
        </nav>
    );
}

Header.propTypes = {
    currentUser: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        token: PropTypes.string,
        image: PropTypes.string,
    }),
    appName: PropTypes.func.isRequired
}
