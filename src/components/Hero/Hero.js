import styles from './styles.module.css';
import ReactTypingEffect from 'react-typing-effect';
import FluidAnimation from 'react-fluid-animation';
import { SlideInDown, SlideInUp } from 'react-animated-components';
import { BsArrowDownCircleFill } from 'react-icons/bs';

const Hero = () => {
  console.log(FluidAnimation);
  return (
    <div className={styles.Hero} id="home">
      <div className={styles.fluidAnimationContainer}>
        <FluidAnimation className={styles.FluidAnimation} />
      </div>
      <div className={styles.Hero__textContainer}>
        <div className={styles.Hero__text}>
          <SlideInDown delayMs={500}>
            <h1 className={styles.Hero__title}>Anthony Iritano</h1>
          </SlideInDown>
          <ReactTypingEffect
            className={styles.Hero__typing}
            text={[
              'Software Engineer',
              'Web Developer',
              'Game Developer',
              'Innovator',
            ]}
            speed={100}
            eraseSpeed={100}
            eraseDelay={1500}
            typingDelay={1000}
            cursorRenderer={(cursor) => (
              <h2 className={styles.Hero__typeCursor}>{cursor}</h2>
            )}
            cursorClassName={styles.Hero__typeCursor}
            displayTextRenderer={(text, i) => {
              return <h2 className={styles.Hero__text}>{text}</h2>;
            }}
          />
          <SlideInUp delayMs={500}>
            <h2 className={styles.Hero__instructions}>
              Click and drag to express your creativity
            </h2>
          </SlideInUp>
          <div className={styles.Hero__downArrow}>
            <a href="#about">
              <BsArrowDownCircleFill
                fill="rgb(22 163 74)"
                className={styles.Hero__downArrowIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
