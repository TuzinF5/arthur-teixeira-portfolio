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
    const { children, tag, style } = this.props;
    const CustomTag = `${tag}`;
    const customClassName = `load-hidden ${style}`;
    return (
      <CustomTag
        className={ customClassName }
        ref={ (c) => {
          this.box = c;
        } }
      >
        {children}
      </CustomTag>
    );
  }
}

RevealMe.defaultProps = {
  style: '',
};

RevealMe.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string.isRequired,
  style: PropTypes.string,
};
