import styles from './styles.module.css';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__textContainer}>
        <div className={styles.Hero__text}>
          <h1 className={styles.Hero__title}>Anthony Iritano</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
