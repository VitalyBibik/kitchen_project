import React from "react";
import PropTypes from 'prop-types';
import styles from './Tab.module.scss'

export const Tab = ({ text, onClick, active= false  }) => {
    if (active) {
        return <button className={styles.button} onClick={onClick}>
           {text}
        </button>
    } else {
        return <button className={styles.button} onClick={onClick}>
           {`#${text}`}
        </button>
    }

}

Tab.propTypes = {
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    active:PropTypes.bool.isRequired
}

// TODO Посмотреть решетку в действии при useState
