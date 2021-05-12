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
        <nav className={cn("navbar", styles.ground )}>
            <div className="container">
                <Link to="/" className="navbar-brand">
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
