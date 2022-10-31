import styles from './styles.module.css';

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.About__textContainer}>
        <h1 className={styles.About__title}>About Me</h1>
        <h2 className={styles.About__text}>
          I am a self taught Software Engineer with industry experience building
          websites and web applications. I specialize in JavaScript and have
          professional experience working with Typescript and React.
        </h2>
      </div>
    </div>
  );
};

export default About;
