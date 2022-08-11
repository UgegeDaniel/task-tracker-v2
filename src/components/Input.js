import React from 'react'
import PropTypes from 'prop-types'
import { InputStyle } from './styles/Input.styled'

const Input = ({title, type, value, onChange, placeholder, }) => {
  return (
    <InputStyle>
        <label>
            {title}
        </label>
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </InputStyle>  )
}

Input.propTypes = {
    title : PropTypes.string,
    type  : PropTypes.string,
    value  : PropTypes.string,
    onChange  : PropTypes.func.isRequired,
    placeholder  : PropTypes.string,
}
export default Input