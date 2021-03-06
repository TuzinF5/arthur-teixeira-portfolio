/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import changeClassOnMouseOutputFunction from '../functions/changeClassOnMouseOutput';
import changeClassOnMouseOverFunction from '../functions/changeClassOnMouseOver';
import toggleMenuFunction from '../functions/toggleMenu';
import imageArthur from '../images/Arthur.jpg';
import style from '../styles/Header.module.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      linkedinClassName: 'bx bxl-linkedin-square',
      gitHubClassName: 'bx bxl-github',
      navId: '',
    };

    this.changeClassOnMouseOver = changeClassOnMouseOverFunction.bind(this);
    this.changeClassOnMouseOutput = changeClassOnMouseOutputFunction.bind(this);
    this.toggleMenu = toggleMenuFunction.bind(this);
  }

  render() {
    const { linkedinClassName, gitHubClassName, navId } = this.state;
    return (
      <header className={ style.header }>
        <div>
          <img src={ imageArthur } alt="Arthur Teixeira sorrindo" />
          <p>Arthur Teixeira</p>
        </div>
        <div>
          <nav id={ navId }>
            <button
              type="button"
              aria-label="Menu"
              onClick={ () => this.toggleMenu(navId) }
            >
              <span />
            </button>
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
              <li>
                <a
                  href="https://www.linkedin.com/in/arthur-teixeira-440376218/"
                  target="_blank"
                  rel="noreferrer"
                  title="Link para o Linkedin de Arthur Teixeira"
                >
                  <i
                    className={ linkedinClassName }
                    onMouseOver={ (event) => this.changeClassOnMouseOver(event) }
                    onFocus={ (event) => this.changeClassOnMouseOver(event) }
                    onMouseOut={ (event) => this.changeClassOnMouseOutput(event) }
                    onBlur={ (event) => this.changeClassOnMouseOutput(event) }
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TuzinF5"
                  target="_blank"
                  rel="noreferrer"
                  title="Link para o GitHub de Arthur Teixeira"
                >
                  <i
                    className={ gitHubClassName }
                    onMouseOver={ (event) => this.changeClassOnMouseOver(event) }
                    onFocus={ (event) => this.changeClassOnMouseOver(event) }
                    onMouseOut={ (event) => this.changeClassOnMouseOutput(event) }
                    onBlur={ (event) => this.changeClassOnMouseOutput(event) }
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
