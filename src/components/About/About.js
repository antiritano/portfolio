import styles from './styles.module.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import { BsArrowDownCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className={styles.About} id="about">
      <div className={styles.About__textContainer}>
        <AnimationOnScroll animateIn="animate__fadeInTopLeft">
          <h1 className={styles.About__title}>About Me</h1>
          <h2 className={styles.About__text}>
            I am a self taught Software Engineer with industry experience
            building websites and web applications. I specialize in JavaScript
            and have professional experience working with Typescript and React.
            My passion for video game development has led me to persue a career
            in the software engineering field. The ability to create something
            and express my creativty through code is what drives me to continue
            to learn and grow as a developer.
          </h2>
          <div className={styles.About__downArrow}>
            <a href="#projects">
              <BsArrowDownCircleFill
                fill="rgb(22 163 74)"
                className={styles.About__downArrowIcon}
              />
            </a>
          </div>
        </AnimationOnScroll>
      </div>
      <div className={styles.About__imageContainer}>
        <img
          className={styles.About__image}
          src="./codingtv.gif"
          alt="Coding"
        />
      </div>
    </div>
  );
};

export default About;
