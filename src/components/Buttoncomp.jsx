import React from 'react';
const Buttoncomp = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseStyle = 'px-4 py-2 rounded-lg font-semibold focus:outline-none transition duration-200';

  const variants = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    danger: 'btn btn-danger',
    outline: 'btn btn-success',
  };

  const selectedVariant = variants[variant.toLowerCase()] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${selectedVariant} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Buttoncomp;
