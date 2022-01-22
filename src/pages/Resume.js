import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Resume extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section>
            <p>Onde contarei minha história</p>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
