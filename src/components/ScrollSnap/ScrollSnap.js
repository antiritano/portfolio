import styles from './styles.module.css';
import React from 'react';

const ScrollSnap = (props) => {
  const { active } = props;
  console.log(active);
  return (
    <div className={styles.ScrollSnap}>
      <div
        className={
          active === 0 ? styles.ScrollSnap__itemActive : styles.ScrollSnap__item
        }
      ></div>
      <div
        className={
          active === 1 ? styles.ScrollSnap__itemActive : styles.ScrollSnap__item
        }
      ></div>
      <div
        className={
          active === 2 ? styles.ScrollSnap__itemActive : styles.ScrollSnap__item
        }
      ></div>
      <div
        className={
          active === 3 ? styles.ScrollSnap__itemActive : styles.ScrollSnap__item
        }
      ></div>
      <div
        className={
          active === 4 ? styles.ScrollSnap__itemActive : styles.ScrollSnap__item
        }
      ></div>
    </div>
  );
};

export default ScrollSnap;
