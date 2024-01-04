import Links from "./Links/Link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.container} flex items-center`}>
      <div className={styles.logo}>Logo</div>
      <Links/>
    </nav>
  )
}
export default Navbar;
