import styles from './HeaderMenu.module.css'
import { Link } from "@tanstack/react-router";



function HeaderMenu() {
    return (
        <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="cities">Cities</Link>
        </li>
        <li>
          <Link to="countries">Countries</Link>
        </li>
      </ul>
    </nav>
    )
}

export default HeaderMenu

