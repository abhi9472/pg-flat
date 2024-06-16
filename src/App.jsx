import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Footer /> */}
      <Outlet />
    </>
  );
}

export default App;
