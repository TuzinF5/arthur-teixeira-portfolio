import React, { Component } from 'react';
import style from '../styles/Footer.module.css';

export default class Footer extends Component {
  render() {
    const today = new Date();
    return (
      <footer className={ style.footer }>
        <p>{`Copyright © ${today.getFullYear()} | Arthur Teixeira.`}</p>
      </footer>
    );
  }
}
