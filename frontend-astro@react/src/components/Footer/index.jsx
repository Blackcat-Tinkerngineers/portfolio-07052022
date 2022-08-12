import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Chelsie L. Bangloy-Gonsalves
      <small className={Styles.byline}>Blackcat-Tinkerngineers</small>
    </footer>
  );
}
export default Footer;
