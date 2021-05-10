import React from "react";
import PropTypes from 'prop-types';
import styles from './PageLink.module.scss'
import { LeftIcon, RightIcon } from "../Icons";

export const PageLink = ({ text, type='Number', onClick  }) => {
    if (type === 'Number') {
        return <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    }
    if (type === 'ArrowLeft') {
        return <button className={styles.button} onClick={onClick}>
            <LeftIcon />
        </button>
    }
    if (type === 'ArrowRight') {
        return <button className={styles.button} onClick={onClick}>
            <RightIcon />
        </button>
    }


}

PageLink.propTypes = {
    icon:PropTypes.bool,
    text:PropTypes.string,
    onClick:PropTypes.func,
    type:PropTypes.oneOf(['Number', 'ArrowLeft', 'ArrowRight']).isRequired,
    style:PropTypes.oneOf(['Black', 'Grey', 'Red']),
}
