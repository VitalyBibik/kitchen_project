import React from 'react';
import agent from '../../agent';
import styles from "./Tags.module.scss";
import PropTypes from "prop-types";
import { Tag } from "../Tag/Tag";

const Tags = props => {
  // @TODO replace when will have real data
  const tags = ['yolo', 'rewrewr', '#dota2', 'fhjhsjfseur4', 'sdsdhghj dfw423', 'asap', 'HELP'] || props.tags;

  if (tags) {
    return (
      <ul className={styles.tags}>
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };

            return (
              <li className={styles.tag} key={tag} >
                <Tag onClick={handleClick}>
                  {tag}
                </Tag>
              </li>
            );
          })
        }
      </ul>
    );
  } else {
    return (
      <div>Loading Tags...</div>
    );
  }
};

Tags.propTypes = {
  onClickTag:PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
};

export default Tags;
