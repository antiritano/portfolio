import styles from './styles.module.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground';

const Contact = () => {
  return (
    <div className={styles.Contact} id="contact">
      <AnimatedBackground />
      <div className={styles.Contact__upArrow}>
        <h2>Back to home</h2>
        <a href="#home">
          <BsArrowUpCircleFill
            fill="rgb(22 163 74)"
            className={styles.Contact__upArrowIcon}
          />
        </a>
      </div>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <h1 className={styles.Contact__title}>Contact</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInDown">
        <div className={styles.Contact__items}>
          <h2 className={styles.Contact__itemTitle}>
            Email: <br />
          </h2>
          <a href="mailto:airitano713@gmail.com">Airitano713@gmail.com 🡥</a>

          <h2 className={styles.Contact__itemTitle}>socials:</h2>
          <a
            href="https://www.linkedin.com/in/anthony-iritano"
            target="_blank"
            rel="noreferrer"
          >
            linkedin 🡥
          </a>

          <a
            href="https://github.com/antiritano"
            target="_blank"
            rel="noreferrer"
          >
            github 🡥
          </a>

          <a
            href="https://instagram.com/antiritano"
            target="_blank"
            rel="noreferrer"
          >
            Instagram 🡥
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
export default Contact;
