import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Home.module.css';
import imageArthur from '../images/Arthur.png';

class Home extends React.Component {
  render() {
    return (
      <div className={ style.home }>
        <header>
          <div>
            <h1>Arthur Aparecido Ferreira Teixeira</h1>
          </div>
          <nav>
            <Link to="/about">Sobre mim</Link>
            <Link to="/projects">Projetos</Link>
          </nav>
        </header>

        <main>
          <div>
            <img src={ imageArthur } alt="Arthur sorrindo" />
          </div>
          <section>
            <p>
              Olá, me chamo Arthur, tenho 23 anos.
              <br />
              Sou natural de Campinas - SP,
              mas atualmente moro em São Gonçalo do Rio Preto - MG.
              <br />
              Gosto de
              jogos e estudar, tenho facilidade em ajudar e ser atencioso com as
              pessoas.
              <br />
              Tenho boa criatividade quanto a pensar e também de
              resolver problemas.
            </p>
          </section>
        </main>

        <footer>
          <h1>Feito por Arthur Teixeira</h1>
        </footer>
      </div>
    );
  }
}

export default Home;
