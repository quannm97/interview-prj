import React from "react";
import Section from "../Sections";
const Home = () => {
  return (
    <div>
      <div>
        <Section title="Caption 1"
        description="One of the few things you completely control on this World is your mind ."
        backgroundImg='/arrowPushUp.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Caption 2"
        description="You must put in the effort to get the life you want"
        backgroundImg='/handStand.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Caption 3"
        description="Do the impossible and you'll never doubt yourself ever again"
        backgroundImg='/lSit.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Caption 4"
        description="You are exactly where you deserve to be"
        backgroundImg='/ringHang.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
        <Section title="Caption 5"
        description="Find a person who is as Successful as you'd like to be, ask them what to do, Do it and work Hard"
        backgroundImg='/birdDog.jpg'
        leftBtnText="Custom"
        rightBtnText="Idea"
        />
      </div>
    </div>
  );
};

export default Home;
