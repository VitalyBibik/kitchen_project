import React from 'react';
import PropTypes from "prop-types";
import styles from "./Sidebar.module.scss"

const Sidebar = ({ title, children }) => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Sidebar;
