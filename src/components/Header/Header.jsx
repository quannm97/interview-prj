import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { selectTrains} from "../../features/trainSlice/trainSlice";
import styles from "./Header.module.scss";


const Header = () => {
  const [navBarOpen, setnavBarOpen] = useState(false);
  const trains = useSelector(selectTrains);
  console.log(trains);
  
  const handleShowHideNavBar = (e) =>{
    setnavBarOpen(!navBarOpen)
  };
  return (
    

    <div className={styles.wraper}>
      <a href="">
        <img src="/LogoMakr2.png" alt="" />
      </a>
      <div className={styles.menu} >
        {trains && trains.map((train,index)=>(
          <a key={index} className="btn" href="">{train}</a>
        ))}
      </div>
      <div className={styles.rightMenu}>
        <button className="btn" href="">
          Shop
        </button>
        <button className="btn" href="">
          Account
        </button>
        <button className="btn" onClick={handleShowHideNavBar} >
          Menu
        </button>
      </div>
      <Fade right>
      <div className={navBarOpen? ` ${styles.navBarWraper}`:`d-none`} >
        <div className={`${styles.navBar}`}>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href="">Roadmap</a>
          </li>
          <li>
            <a href="">Achivement</a>
          </li>
          <li>
            <a href="">Inventory</a>
          </li>
          <li>
            <a href="">Trade</a>
          </li>
          <li>
            <a href="">Equipment</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Test</a>
          </li>
          
        </div>
        <div className={styles.closeWraper} onClick={handleShowHideNavBar}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      </Fade>
    </div>
   
  );
};

export default Header;
