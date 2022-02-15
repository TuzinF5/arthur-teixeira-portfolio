import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RevealMe from '../components/RevealMe';
import style from '../styles/Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={ style.home }>
          <section>
            <RevealMe tag="div" config={ { distance: '100px', duration: 2000 } }>
              <p>Desenvolvedor</p>
              <p>Front-End</p>
              {/* <p>Uma forte presença online</p> */}
            </RevealMe>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
