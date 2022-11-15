import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header , Footer} from './Components';

// Pages
import { Home, Contact, Login, Register, ResetPassword } from "./Pages"

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Header />
      <Routes>
        
        <Route path="/" element={< Home /> } />
        <Route path="/contact" element={< Contact /> } />
        <Route path="/login" element={< Login /> } />
        <Route path="/register" element={< Register /> } />
        <Route path="/reset-password" element={< ResetPassword /> } />
        <Route path="/order-history" element={< ResetPassword /> } />

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
