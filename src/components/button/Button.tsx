import { Btn, All} from './ButtonStyled'
import PropTypes from 'prop-types'

function Button(props: { name: string; }) {
  return (
    <All>
      <Btn>{props.name}</Btn>
    </All>
)
}

Button.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired,
}

export default Button;