import React from 'react'
import './App.scss';
import Banner from './components/Banner';
const App = ({moduleData}) => {
  return (
    <div className='sw-hero-banner__container'>
        <Banner/>
    </div>
  )
}

export default App