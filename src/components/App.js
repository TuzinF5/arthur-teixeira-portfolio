import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Services from '../pages/Services';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/services" element={ <Services /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
