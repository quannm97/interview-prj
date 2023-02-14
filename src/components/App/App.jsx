import Footer from '../Footer';
import Header from '../Header';
import SideNavBar from '../SideNavBar';
import './App.scss';

import React from 'react'
import Section from '../Sectrion';

const App = () => {
  return (
    <div>
    <Header/>
    <SideNavBar/>
    <Footer/>
    <Section/>
    </div>
  )
}

export default App;