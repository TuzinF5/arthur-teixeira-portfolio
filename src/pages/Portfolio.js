/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RenderDesign from '../components/RenderDesign';
import imageAppReceitas from '../images/app-de-receitas.jpg';
import imageSuperTrumpGame from '../images/super-trump-game.jpg';
import style from '../styles/Portfolio.module.css';

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={ style.portfolio }>
          <section id={ style.sectionprojects }>
            <section id={ style.title }>
              <p>Projetos</p>
            </section>

            <section id={ style.projects }>
              <RenderDesign
                src={ imageAppReceitas }
                alt="Projeto App de Receitas Houseiras"
                phrase="Projeto App de Receitas"
                href="https://app-de-receitas-sage.vercel.app/"
                title="Link para o site App de Receitas Houseiras"
              />
              <RenderDesign
                src={ imageSuperTrumpGame }
                alt="Projeto jogo Super Trunfo"
                phrase="Projeto Jogo Super Trunfo"
                href="https://super-trump-game-project.vercel.app/"
                title="Link para o site jogo Super Trunfo"
              />
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
