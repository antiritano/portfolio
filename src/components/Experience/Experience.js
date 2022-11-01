import styles from './styles.module.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const Experience = () => {
  return (
    <div className={styles.Experience}>
      <div className={styles.Experience__textContainer}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={styles.Experience__text}>
            <h1 className={styles.Experience__title}>Experience</h1>
            <ul>
              <li className={styles.Experience__item}>
                <h2 className={styles.Experience__company}>
                  <span className={styles.Experience__greenText}>
                    Company Name:
                  </span>{' '}
                  Cause of a Kind
                </h2>
                <h3 className={styles.Experience__position}>
                  <span className={styles.Experience__greenText}>
                    Position:
                  </span>{' '}
                  Software Engineer
                </h3>
                <h4 className={styles.Experience__date}>
                  <span className={styles.Experience__greenText}>Date:</span>{' '}
                  9/17/2021 - 10/10/2022
                </h4>
                <p className={styles.Experience__description}>
                  <span className={styles.Experience__greenText}>
                    Description:
                  </span>
                  <br />
                  Managed multiple full-stack software systems from initial
                  design through completion, and optimizing interfaces for
                  multi-platform compatibility. Collaborated with programmers
                  and clients in an agile environment to meet all project
                  requirements, including code testability, scalability, SEO
                  standards, and accessibility.
                </p>
              </li>
            </ul>
          </div>
        </AnimationOnScroll>
      </div>
      <div className={styles.Experience__skills}>
        <h1 className={styles.Experience__skillsTitle}>Skills</h1>
        <ul className={styles.Experience__skillsList}>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>HTML</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>CSS</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>JavaScript</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>React</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Node</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Express</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Git</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>GitHub</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Heroku</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Tailwind</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Jest</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Liquid</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>GML</li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <li className={styles.Experience__skillsItem}>Unity</li>
          </AnimationOnScroll>
        </ul>
      </div>
      <div className={styles.Experience__education}>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <h1 className={styles.Experience__educationTitle}>Certifications</h1>
          <ul className={styles.Experience__educationList}>
            <li className={styles.Experience__educationItem}>
              <a className={styles.Experience__greenTextLink}>
                CS50x Computer Science Course Completion
              </a>
              <h3 className={styles.Experience__eductationDescription}>
                <span className={styles.Experience__greenText}>
                  Description:{' '}
                </span>
                A computer science course of study offered by HarvardX, an
                online learning initiative of Harvard University.
              </h3>
            </li>
            <li className={styles.Experience__educationItem}>
              <a>Responsive Web Design</a>
              <h3 className={styles.Experience__eductationDescription}>
                <span className={styles.Experience__greenText}>
                  Description:{' '}
                </span>
                A Developer Certification, representing approximately 300 hours
                of coursework.
              </h3>
            </li>
          </ul>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Experience;
