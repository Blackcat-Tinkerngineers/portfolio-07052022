import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Chelsie L. Bangloy-Gonsalves
      <small className={Styles.byline}>Blackcat-Tinkerngineers</small>
      <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
    </footer>
  );
}
export default Footer;
