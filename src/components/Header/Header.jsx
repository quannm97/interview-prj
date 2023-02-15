import React from 'react';
import styles from './Header.module.scss';
const Header = () => {
  return (

    <div className={styles.wraper}>
      <a href="">
        <img src="/LogoMakr2.png" alt="" />
      </a>
      <div className={styles.menu}>
        <button className='btn' href="">Link1</button>
        <a href="">Link2</a>
        <a href="">Link3</a>
        <a href="">Link4</a>
      </div>
      <div className={styles.rightMenu}>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a href="">Menu</a>

      </div>
    </div>
  )
};

export default Header;