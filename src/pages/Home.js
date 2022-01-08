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
            <RevealMe>
              <p>Arthur</p>
              <p>Teixeira</p>
              <p>Uma forte presença online</p>
            </RevealMe>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
