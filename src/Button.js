import React from 'react'
import PropTypes from 'prop-types';
import styled from './Button.module.css';

function Button({onClick, children}) {
  return (
    <button className={styled.btn} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button