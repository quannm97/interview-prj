import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { selectTrains} from "../../features/trainSlice/trainSlice";
import styles from "./Header.module.scss";
import * as ROUTES from "../../constants/routes";


const Header = () => {
  const [navBarOpen, setnavBarOpen] = useState(false);
  const trains = useSelector(selectTrains);
  
  const {currentUser}=useSelector((state)=>state.user)
  
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
        <Link className="btn" href="">
          Shop
        </Link>
        <Link className="btn" to={currentUser?(ROUTES.USER):(ROUTES.SIGNIN)}>
          Account
        </Link>
        <Link className="btn" onClick={handleShowHideNavBar} >
          Menu
        </Link>
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
