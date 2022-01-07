import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import style from '../styles/Home.module.css';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className={ style.home }>
          <section>
            <p>Arthur</p>
            <p>Teixeira</p>
            <p>Uma forte presença online</p>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
