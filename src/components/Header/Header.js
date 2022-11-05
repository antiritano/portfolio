import styles from './styles.module.css';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className={styles.Header}>
      <div className={styles.Header__leftContainer}>
        <a
          href="https://github.com/antiritano"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub
            fill="white"
            className={styles.Header__leftContainerItem}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-iritano"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin
            fill="white"
            className={styles.Header__leftContainerItem}
          />
        </a>
        <a
          href="https://instagram.com/antiritano"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram
            fill="white"
            className={styles.Header__leftContainerItem}
          />
        </a>
      </div>
      <div className={styles.Header__rightContainer}>
        <nav>
          <section className={styles.Header__mobileMenu}>
            <div
              className={styles.Header__hamburger}
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className={styles.Header__hamburgerLine}></span>
              <span className={styles.Header__hamburgerLine}></span>
              <span className={styles.Header__hamburgerLine}></span>
            </div>

            <div
              className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}
            >
              {' '}
              <div
                className={styles.Header__cross}
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className={styles.Header__hamburgerMenu}>
                <li>
                  <a onClick={() => setIsNavOpen(false)} href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => setIsNavOpen(false)} href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a onClick={() => setIsNavOpen(false)} href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a onClick={() => setIsNavOpen(false)} href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className={styles.Header__desktopMenu}>
            <li className={styles.Header__rightContainerItem}>
              <a href="#home">Home</a>
            </li>
            <li className={styles.Header__rightContainerItem}>
              <a href="#about">About</a>
            </li>
            <li className={styles.Header__rightContainerItem}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.Header__rightContainerItem}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
