import React from "react";
import PropTypes from 'prop-types';
import styles from './Button.module.scss'
import { EditIcon } from "../Icons";
import cn from "classnames";

export const Button = ({  icon = false, text, type='Primary', onClick  }) => {
    if (type === 'Primary') {
        return <button className={styles.button} onClick={onClick}>
            {icon ? <EditIcon /> : null} <span className={ cn({
            [styles.text]: icon,
        })
        }>{text}</span>
        </button>
    }
    if (type === 'Secondary') {
        return <button className={cn(styles.button, styles.button_secondary)} onClick={onClick}>{text}
        </button>
    }

}



Button.propTypes = {
    icon:PropTypes.bool,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    type:PropTypes.oneOf(['Primary', 'Secondary']).isRequired,
}
