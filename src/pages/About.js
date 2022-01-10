/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import style from '../styles/About.module.css';
import imageArthur from '../images/Arthur.jpg';
import RevealMe from '../components/RevealMe';

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <RevealMe tag="main" style={ style.about } config={ { duration: 2000 } }>
          <section>
            <div>
              <img src={ imageArthur } alt="Arthur Teixeira sorrindo" />
            </div>
            <div>
              <RevealMe
                tag="div"
                config={ { distance: '100px', duration: 2000 } }
              >
                <p>Minha história</p>
                <p>
                  Olá, me chamo Arthur, tenho 23 anos. Sou natural de Campinas -
                  SP, mas atualmente moro em São Gonçalo do Rio Preto - MG.
                  Gosto de jogos e estudar, tenho facilidade em ajudar e ser
                  atencioso com as pessoas. Tenho boa criatividade quanto a
                  pensar e também de resolver problemas.
                </p>
              </RevealMe>
            </div>
          </section>
        </RevealMe>
        <Footer />
      </>
    );
  }
}
