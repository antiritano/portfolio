import styles from './styles.module.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__leftContainer}>
        <AiFillGithub
          fill="white"
          className={styles.Header__leftContainerItem}
        />
        <AiFillLinkedin
          fill="white"
          className={styles.Header__leftContainerItem}
        />
      </div>
      <div className={styles.Header__rightContainer}>
        <li className={styles.Header__rightContainerItem}>About Me</li>
        <li className={styles.Header__rightContainerItem}>Experience</li>
        <li className={styles.Header__rightContainerItem}>Projects</li>
        <li className={styles.Header__rightContainerItem}>Contact</li>
      </div>
    </div>
  );
};

export default Header;
