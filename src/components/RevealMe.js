import PropTypes from 'prop-types';
import React from 'react';

export default class RevealMe extends React.Component {
  componentDidMount() {
    const { config } = this.props;
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
  config: {},
};

RevealMe.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.oneOfType([PropTypes.object]),
  style: PropTypes.string,
  tag: PropTypes.string.isRequired,
};
