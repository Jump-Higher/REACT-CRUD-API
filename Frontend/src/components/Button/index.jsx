import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ label, variant, icon, ...rest }) => {
  return (
    <div>
      <button className={`btn btn-${variant}`} {...rest}>
        {label}
        {icon && (
          <span>
            <i className={`fas fa-${icon}`}></i>
          </span>
        )}
      </button>
    </div>
  )
}

export default Button
