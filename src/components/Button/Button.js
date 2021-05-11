import React from "react";
import PropTypes from 'prop-types';
import styles from './Button.module.scss'
import cn from "classnames";

export const Button = ({  icon , children, type='Primary', className='', onClick }) => {
    if (type === 'Primary') {
        return <button className={cn(className, styles.button)} onClick={onClick}>
            {icon && icon()} <span className={ cn({
            [styles.text]: icon,
        })
        }>{children}</span>
        </button>
    }
    if (type === 'Secondary') {
        return <button className={cn(styles.button, styles.button_secondary)} onClick={onClick}>{children}
        </button>
    }

}


Button.propTypes = {
    icon:PropTypes.func,
    children:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    type:PropTypes.oneOf(['Primary', 'Secondary']).isRequired,
    className:PropTypes.string
}
