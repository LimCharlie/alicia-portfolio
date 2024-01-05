import Links from './Links/Link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.container} flex items-center mt-8`}>
      <div className={`${styles.logo} flex justify-center`}>
        <Image
          src='/mini-logo.png'
          alt='Mini logo Alicia'
          width={80}
          height={80}
        />
      </div>
      <Links />
    </nav>
  );
};
export default Navbar;
