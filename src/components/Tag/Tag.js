import React from "react";
import PropTypes from 'prop-types';
import styles from './Tag.module.scss';
import cn from "classnames";

export const Tag = ({ onClick, children, isActive = false  }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        {
          [styles.active]: isActive
        }
      )}
    >
      {children}
    </button>
  )
};

Tag.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};
