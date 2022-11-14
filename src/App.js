import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header , Footer} from './Components';
// Pages
import { Home, Contact } from "./Pages"



function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path="/" element={< Home /> } />
        <Route path="/contact" element={< Contact /> } />
        {/* <Route path="/" element={< Home /> } >
        <Route path="/" element={< Home /> } >
        <Route path="/" element={< Home /> } > */}

      </Routes>
    <Footer />
    </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
