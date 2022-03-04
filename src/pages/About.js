/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RevealMe from '../components/RevealMe';
import style from '../styles/About.module.css';

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={ style.about }>
          <section>
            <RevealMe tag="div" config={ { distance: '100px', duration: 2000 } }>
              <p>Minha história</p>
              <p>
                Olá, me chamo Arthur, tenho 24 anos. Sou natural de Campinas -
                SP, mas atualmente moro em São Gonçalo do Rio Preto - MG. Gosto
                de jogos e estudar, tenho facilidade em ajudar e ser atencioso
                com as pessoas. Tenho boa criatividade quanto em pensar e também
                de resolver problemas.
              </p>
            </RevealMe>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
