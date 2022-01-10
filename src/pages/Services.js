/* eslint-disable react/jsx-max-depth */
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
                src="https://areademulher.r7.com/wp-content/uploads/2019/11/roxo-conheca-50-curiosidades-sobre-a-cor-que-tem-diversos-significados-7.jpg"
                alt=""
              />
              <div>
                <p>Programação Front-End</p>
                <p>Superando expectativas</p>
              </div>
            </div>
            <div>
              <img
                src="https://areademulher.r7.com/wp-content/uploads/2019/11/roxo-conheca-50-curiosidades-sobre-a-cor-que-tem-diversos-significados-7.jpg"
                alt=""
              />
              <div>
                <p>Javascript</p>
                <p>Uma estrutura ideal</p>
              </div>
            </div>
            <div>
              <img
                src="https://areademulher.r7.com/wp-content/uploads/2019/11/roxo-conheca-50-curiosidades-sobre-a-cor-que-tem-diversos-significados-7.jpg"
                alt=""
              />
              <div>
                <p>CSS</p>
                <p>Compromisso com a qualidade</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
