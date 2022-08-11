import PropTypes from 'prop-types'
import { ButtonStyle } from './styles/Button.styled'

const Button = ({ width, bg, text, onClick }) => {
  return (
    <ButtonStyle
      width = {width}
      onClick={onClick}
      bg={bg}
    >
      {text}
    </ButtonStyle>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  bg: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
