'use client'; // This is a client component

import { useState } from 'react';
import styles from './index.module.css';

// Assets
import logo from '../../assets/logo.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import behance from '../../assets/behance.svg';
import linkedin from '../../assets/linkedin.svg';
import menu from '../../assets/menu.svg';

export default function Navbar() {
  const [btn, setBtn] = useState<boolean>(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.center}>
          <ul>
            <a>Hakkımızda</a>
            <a>Jüri - Yarışma Yazılımı</a>
            <a>Word Ninja</a>
            <a>Word Pyramids</a>
          </ul>
        </div>
        <div className={styles.right}>
          <img src={youtube} alt="youtube" />
          <img src={instagram} alt="instagram" />
          <img src={behance} alt="behance" />
          <img src={linkedin} alt="linkedin" />
        </div>
        <span id="menuBtn" onClick={() => setBtn((prev) => !prev)} className={styles.menuBtn}>
          <img src={menu} alt="menu" />
        </span>
      </nav>
      {btn && (
        <div className={styles.menu}>
          <ul>
            <a>Hakkımızda</a>
            <a>Jüri - Yarışma Yazılımı</a>
            <a>Word Ninja</a>
            <a>Word Pyramids</a>
          </ul>
          <div className={styles.menuSocial}>
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="instagram" />
            <img src={behance} alt="behance" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      )}
    </>
  );
}
