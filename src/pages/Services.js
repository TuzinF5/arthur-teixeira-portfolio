/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RevealMe from '../components/RevealMe';
import imageDefault from '../images/Roxo.jpg';
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
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                />
              </div>
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
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                />
              </div>
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
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                />
              </div>
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
