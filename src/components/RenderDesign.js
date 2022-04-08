import PropTypes from 'prop-types';
import React from 'react';
import style from '../styles/RenderDesign.module.css';

export default class RenderDesign extends React.Component {
  render() {
    const { src, alt, phrase, href, title } = this.props;
    return (
      <section className={ style.renderdesign }>
        <div>
          <a href={ href } target="_blank" rel="noreferrer" title={ title }>
            <img src={ src } alt={ alt } />
          </a>
        </div>
        <div id={ style.phrase }>
          <p>{phrase}</p>
        </div>
      </section>
    );
  }
}

RenderDesign.propTypes = {
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
