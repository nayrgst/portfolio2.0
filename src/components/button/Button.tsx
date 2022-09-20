import React from 'react';
import { Btn } from './ButtonStyled'
import PropTypes from 'prop-types'

function Button(props: { name: string; }) {
  return (
    <Btn>{props.name}</Btn>
)
}

Button.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired,
}

export default Button;