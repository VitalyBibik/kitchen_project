import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// TODO нужный компонент Side-Bar

export const LoggedOutView = ({ currentUser }) => {
    if (!currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">

                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Sign in
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Sign up
                    </Link>
                </li>

            </ul>
        );
    }
    return null;
};

LoggedOutView.propTypes = {
    currentUser: PropTypes.object
}
