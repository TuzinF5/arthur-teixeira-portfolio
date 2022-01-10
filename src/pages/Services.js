import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../styles/Services.module.css';

export default class Services extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={ style.services }>
          <section>
            <p>Habilidades em programação</p>
            <p>Soluções ágeis</p>
          </section>
          <section>
            <div>
              <img
                src="https://www.mauchampions.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                alt=""
              />
              <p>Programação Front-End</p>
              <p>Superando expectativas</p>
            </div>
            <div>
              <img
                src="https://www.mauchampions.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                alt=""
              />
              <p>Javascript</p>
              <p>Uma estrutura ideal</p>
            </div>
            <div>
              <img
                src="https://www.mauchampions.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                alt=""
              />
              <p>CSS</p>
              <p>Compromisso com a qualidade</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
