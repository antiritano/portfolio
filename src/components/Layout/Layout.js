import ScrollSnap from '../ScrollSnap/ScrollSnap';
import styles from './styles.module.css';

const Layout = ({ children, activeScroll }) => {
  return (
    <div className={styles.Layout}>
      <main>{children}</main>
      <ScrollSnap active={activeScroll} />
    </div>
  );
};

export default Layout;
