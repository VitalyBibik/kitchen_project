import React from "react";
import PropTypes from 'prop-types';
import styles from './Tab.module.scss'
import cn from "classnames";

export const Tab = ({ children, onClick, active= false  }) => {
    if (active) {
        return <button className={styles.button} onClick={onClick}>
           {children}
        </button>
    } else {
        return <button className={styles.button} onClick={onClick}>
           {`#${children}`}
        </button>
    }

}

Tab.propTypes = {
    children:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    active:PropTypes.bool.isRequired
}

// TODO Посмотреть решетку в действии при useState Оставить пока так
