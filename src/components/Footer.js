import React, { Component } from 'react';
import style from '../styles/Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={ style.footer }>
        <p>Copyright © 2022 | Arthur Teixeira.</p>
      </footer>
    );
  }
}
