import React from 'react';
import '../styles/notfound.css';
import rickAndMorty from '../images/Rick-and-Morty-panic.jpg';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Não entre em pânico!!</h1>
          <h1>Página não encontrada.</h1>
        </header>
        <main>
          <img src={rickAndMorty} alt="Rick and Morty não entre em pânico" />
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </main>
        <footer>
          <h3>Feito por Arthur Teixeira</h3>
        </footer>
      </>
    );
  }
}

export default NotFound;
