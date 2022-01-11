/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../styles/Services.module.css';
import RevealMe from '../components/RevealMe';

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
                <RevealMe tag="p" config={ { distance: '50px', duration: 2000 } }>
                  Programação Front-End
                </RevealMe>
                <RevealMe tag="p" config={ { distance: '50px', duration: 2000 } }>
                  Superando expectativas
                </RevealMe>
              </div>
            </div>
            <div>
              <img
                src="https://areademulher.r7.com/wp-content/uploads/2019/11/roxo-conheca-50-curiosidades-sobre-a-cor-que-tem-diversos-significados-7.jpg"
                alt=""
              />
              <div>
                <RevealMe tag="p" config={ { distance: '50px', duration: 2000 } }>
                  Javascript
                </RevealMe>
                <RevealMe tag="p" config={ { distance: '50px', duration: 2000 } }>
                  Uma estrutura ideal
                </RevealMe>
              </div>
            </div>
            <div>
              <img
                src="https://areademulher.r7.com/wp-content/uploads/2019/11/roxo-conheca-50-curiosidades-sobre-a-cor-que-tem-diversos-significados-7.jpg"
                alt=""
              />
              <div>
                <RevealMe tag="p" config={ { distance: '50px', duration: 2000 } }>
                  Css
                </RevealMe>
                <RevealMe tag="p" config={ { distance: '50px', duration: 2000 } }>
                  Compromisso com a qualidade
                </RevealMe>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
