import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./components/about/about"
import Home from './components/home/home';
import Header from './components/header/header';

import './App.css';

function App() {
  return (
    <body>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                <Route path="/home" element={<Home />} />
                <Route path="/header" element={<Header />} />
                <Route path="/about" element={<About />} />
                </Route>
            </Routes>
            </BrowserRouter>
    </body>
  );
}

export default App;
