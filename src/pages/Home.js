import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import style from '../styles/Home.module.css';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* <main className={ style.home }>
          <section>
            <p>
              Olá, me chamo Arthur, tenho 23 anos.
              <br />
              Sou natural de Campinas - SP, mas atualmente moro em São Gonçalo
              do Rio Preto - MG.
              <br />
              Gosto de jogos e estudar, tenho facilidade em ajudar e ser
              atencioso com as pessoas.
              <br />
              Tenho boa criatividade quanto a pensar e também de resolver
              problemas.
            </p>
          </section>
        </main> */}
        <Footer />
      </>
    );
  }
}
