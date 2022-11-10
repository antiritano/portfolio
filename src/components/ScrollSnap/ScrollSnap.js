import styles from './styles.module.css';
import React from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';

const ScrollSnap = () => {
  const location = useLocation();
  console.log(location.hash);

  return (
    <div className={styles.ScrollSnap}>
      <a href="#home">
        <div
          className={
            location.hash === '#home'
              ? styles.ScrollSnap__itemActive
              : styles.ScrollSnap__item
          }
        ></div>
      </a>
      <a href="#about">
        <div
          className={
            location.hash === '#about'
              ? styles.ScrollSnap__itemActive
              : styles.ScrollSnap__item
          }
        ></div>
      </a>
      <a href="#projects">
        <div
          className={
            location.hash === '#projects'
              ? styles.ScrollSnap__itemActive
              : styles.ScrollSnap__item
          }
        ></div>
      </a>
      <a href="#contact">
        <div
          className={
            location.hash === '#contact'
              ? styles.ScrollSnap__itemActive
              : styles.ScrollSnap__item
          }
        ></div>
      </a>
    </div>
  );
};

export default ScrollSnap;
