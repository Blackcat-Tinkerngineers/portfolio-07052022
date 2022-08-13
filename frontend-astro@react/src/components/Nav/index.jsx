import { h } from "preact";
import Styles from "./styles.module.scss";


function Nav() {
  return (
    <nav className={Styles.nav} class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">


        <a className={Styles.social} href="https://twitter.com/clbgonsalves/" target="_blank">
          <i class="fa-brands fa-twitter fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"></i>
        </a>
        <a className={Styles.social} href="https://github.com/Blackcat-Tinkerngineers" target="_blank">
          <i class="fa-brands fa-github-alt fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"></i>
        </a>
        <a className={Styles.social} href="https://www.linkedin.com/in/chelsiebgonsalves/" target="_blank">

          
        <i class="fa-brands fa-linkedin-in fa-bounce" id="socialicon" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"></i></a>
     </div>
      </div>
    </nav>
  );
}
export default Nav;
