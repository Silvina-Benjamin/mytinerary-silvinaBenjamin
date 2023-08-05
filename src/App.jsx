import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BodyContainer from './components/BodyContainer';
import FooterContainer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <BodyContainer />
      <FooterContainer />
    </div>
  )
}

export default App
