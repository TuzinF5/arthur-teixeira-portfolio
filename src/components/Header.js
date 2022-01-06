import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Header.module.css';
import imageArthur from '../images/Arthur.png';

export default class Header extends Component {
  render() {
    return (
      <header className={ style.header }>
        <div>
          <img src={ imageArthur } alt="Arthur sorrindo" />
          <p>Arthur Teixeira</p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li>
              <Link to="/resume">Currículo</Link>
            </li>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
