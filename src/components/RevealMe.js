import PropTypes from 'prop-types';
import React from 'react';

export default class RevealMe extends React.Component {
  componentDidMount() {
    const config = {
      distance: '100px',
      duration: 2000,
    };
    ScrollReveal().reveal(this.box, config);
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="load-hidden"
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
  children: PropTypes.node.isRequired,
};
