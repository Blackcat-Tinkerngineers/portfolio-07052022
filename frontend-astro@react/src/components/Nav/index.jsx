import { h } from "preact";
import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a className={Styles.logolink} href="/">
        <img className={Styles.logo} src="/assets/logo.svg" alt="logo" />
      </a>
      <a className={Styles.link} href="/Projects">
        Projects
      </a>
      <a className={Styles.link} href="/Resume">
        Resume
      </a>
      <a className={Styles.link} href="/About">
        About
      </a>
      <a className={Styles.link} href="/Contact">
        Contact</a>
      <div class="nav-icons" id="nav-icons">
      <a className={Styles.social} href="https://twitter.com/clbgonsalves/">
      <i class="fa-brands fa-twitter fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"></i>
      </a>
      <a className={Styles.social} href="https://github.com/Blackcat-Tinkerngineers">
      <i class="fa-brands fa-github-alt fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"></i>
      </a>
      <a className={Styles.social} href="https://www.linkedin.com/in/chelsiebgonsalves/">  
<i class="fa-brands fa-linkedin-in fa-bounce" id="socialicon" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"></i></a> 
   </div>
    </nav>
  );
}
export default Nav;
