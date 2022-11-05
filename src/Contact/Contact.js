import styles from './styles.module.css';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h1 className={styles.Contact__title}>Contact</h1>
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
    </div>
  );
};
export default Contact;
