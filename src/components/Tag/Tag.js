import React from "react";
import PropTypes from 'prop-types';
import styles from './Tag.module.scss'

export const Tag = ({ text, onClick  }) => {
        return <button className={styles.button} onClick={onClick}>
            <span className={styles.text}>{text}</span>
        </button>
}

Tag.propTypes = {
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func,
}
