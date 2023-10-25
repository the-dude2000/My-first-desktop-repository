import React from 'react'

import { Footer, Information, Possibilities, Features, Whatmillertech, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatmillertech />
        <Features />
        <Possibilities />
        <CTA />
        <Information />
        <Footer />
    </div>
  )
}

export default App