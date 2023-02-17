

import React from "react";
import Section from "../Sections";
import styles from './Home.module.scss';
const Home = () => {
  

  return (
      <div className={styles.wraper}>
        <Section title="One"
        description="One of the few things you completely control on this World is your mind"
        backgroundImg='/arrowPushUp.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Two"
        description="You must put in the effort to get the life you want"
        backgroundImg='/handStand.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Three"
        description="Do the impossible and you'll never doubt yourself ever again"
        backgroundImg='/lSit.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Four"
        description="You are exactly where you deserve to be"
        backgroundImg='/ringHang.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Five"
        description="Find a person who is as Successful as you'd like to be, ask them what to do, Do it and work Hard"
        backgroundImg='/birdDog.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
      </div>
    
  );
};

export default Home;
