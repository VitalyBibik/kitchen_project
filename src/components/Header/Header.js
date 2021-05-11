import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoggedOutView } from "../LoggedOutView";
import { LoggedInView } from "../LoggedInView";

// TODO нужный компонент Side-Bar

export const Header = ({ appName, currentUser }) => {
    console.log(typeof currentUser,'cur')
    return (
        <nav className="navbar navbar-light">
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
