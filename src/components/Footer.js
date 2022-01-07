import React, { Component } from 'react';
import style from '../styles/Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={ style.footer }>
        <p>©2022 por Arthur Teixeira.</p>
      </footer>
    );
  }
}
