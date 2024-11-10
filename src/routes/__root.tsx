import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import styles from './_root.module.css'
import logo from '../../src/assets/logo.png'
 

export const Route = createRootRoute({
  component: () => (
    <>

<header className={styles.container}>
<div>
<Link className={styles.links}  to="/" >
<img  className={styles.logo}  src={logo} alt="Description of the image" />
</Link>
      <Link className={styles.links}  to="/" >
          Home
        </Link>
        <Link className={styles.links}  to="/about">
          About
        </Link>
      </div>
</header>

<Outlet />
<TanStackRouterDevtools></TanStackRouterDevtools>
    </>
  ),
  
})