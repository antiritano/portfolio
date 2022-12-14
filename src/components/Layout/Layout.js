import ScrollSnap from '../ScrollSnap/ScrollSnap';
import Header from '../Header/Header';
import styles from './styles.module.css';
import { BsArrowDownCircleFill } from 'react-icons/bs';

const Layout = ({ children, activeScroll }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>{children}</main>
      <ScrollSnap active={activeScroll} />
    </div>
  );
};

export default Layout;
