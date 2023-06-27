import Link from 'next/link'

import Logo from './Logo'

import classes from './Main-navigation.module.css'

export default function Navigation() {
  return <header className={classes.header}>
    <Link href='/'>
      {/* <a> */}
        <Logo />
      {/* </a> */}
    </Link>
    <nav>
      <ul>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>

      </ul>
    </nav>
  </header>
}