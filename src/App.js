import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import Background from './components/Background'
import NasaPhoto from './components/NasaPhoto'



function App() {
  return(
    <React.Fragment>
      <Background/>
      <NavBar/>
      <NasaPhoto/>
    </React.Fragment>
  )
}

export default App;