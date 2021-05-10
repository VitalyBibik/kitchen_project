import React from "react";
import PropTypes from 'prop-types';
import styles from './Button.module.scss'


export const Button = ({  icon = false, text, border= false  }) => {
    console.log(styles.test)
   return <button className={styles.test}>
        {text}
    </button>
}



Button.propTypes = {
    icon:PropTypes.bool,
    text:PropTypes.string.isRequired,
    border:PropTypes.bool,
    onClick:PropTypes.func
}
