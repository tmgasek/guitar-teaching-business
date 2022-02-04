import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMusicNote } from 'react-icons/md';
import styles from '../styles/Navbar.module.scss';

const links = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Awards',
    href: '#awards',
  },
  {
    name: 'Conract',
    href: '#contact',
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.nav}>
      <h1 style={{ color: 'var(--color-white)' }}>LOGO</h1>
      <ul className={styles.navMain}>
        {links.map((link) => (
          <li key={link.href}>
            <a className={styles.navItem} href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.navLogin}>
        <a href="#login">Login / Register</a>
        <div />
        <a href="#login">Book Lessons</a>
      </div>
      <div className={styles.navMobile}>
        <GiHamburgerMenu
          style={{ cursor: 'pointer' }}
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className={`slide-bottom ${styles.navMobileOverlay}`}>
            <MdMusicNote
              color="#fff"
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className={styles.navMobileMain}>
              {links.map((link) => (
                <li key={link.href}>
                  <a className={styles.navItem} href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
