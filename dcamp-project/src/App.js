// App.js
import React from 'react';
// import './App.css';
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';
// import Sidebar from './componentes/Sidebar';
// import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      
    </div>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App; 