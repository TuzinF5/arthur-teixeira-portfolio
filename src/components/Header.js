/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Header.module.css';
import imageArthur from '../images/Arthur.png';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      linkedinClassName: 'bx bxl-linkedin-square',
      gitHubClassName: 'bx bxl-github',
    };

    this.changeClassOnMouseOver = this.changeClassOnMouseOver.bind(this);
    this.changeClassOnMouseOutput = this.changeClassOnMouseOutput.bind(this);
  }

  changeClassOnMouseOver({ target }) {
    if (target.className.includes('linkedin')) {
      this.setState({ linkedinClassName: 'bx bxl-linkedin-square bx-tada' });
    } else {
      this.setState({ gitHubClassName: 'bx bxl-github bx-tada' });
    }
  }

  changeClassOnMouseOutput({ target }) {
    if (target.className.includes('linkedin')) {
      this.setState({ linkedinClassName: 'bx bxl-linkedin-square' });
    } else {
      this.setState({ gitHubClassName: 'bx bxl-github' });
    }
  }

  render() {
    const { linkedinClassName, gitHubClassName } = this.state;
    return (
      <header className={ style.header }>
        <div>
          <img src={ imageArthur } alt="Arthur sorrindo" />
          <p>Arthur Teixeira</p>
        </div>
        <div>
          <nav>
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
