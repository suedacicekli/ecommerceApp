import { React } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, Image } from "@chakra-ui/react";

const logo = require("../../assets/logopapatya.png");

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">
            <Image src={logo} className={styles.logoImage} />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/" className={styles.navItems}> Products </Link>
          </li>
          <li>
            <Link to="/" className={styles.navItemsPassive}> Map </Link>
          </li>
          <li>
            <Link to="/" className={styles.navItemsPassive}> Orders </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to="/signin">
          <Button colorScheme="green">Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="green">SignUp</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
