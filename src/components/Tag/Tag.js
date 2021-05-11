import React from "react";
import PropTypes from 'prop-types';
import styles from './Tag.module.scss'

export const Tag = ({ onClick, children  }) => {
        return <button className={styles.button} onClick={onClick}>
            {children}
        </button>
}

Tag.propTypes = {
    onClick:PropTypes.func,
    children:PropTypes.string,
}
