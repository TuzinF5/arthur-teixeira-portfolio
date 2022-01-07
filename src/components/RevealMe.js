import PropTypes from 'prop-types';
import React from 'react';
import sr from '../functions/ScrollReveal';

export default class RevealMe extends React.Component {
  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 0,
      distance: '300px',
      scale: 1,
      easing: 'ease',
    };
    sr.reveal(this.box, config);
  }

  render() {
    const { children } = this.props;
    return (
      <div
        ref={ (c) => {
          this.box = c;
        } }
      >
        {children}
      </div>
    );
  }
}

RevealMe.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
