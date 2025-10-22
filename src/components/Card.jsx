import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  hover = false,
  ...rest 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${padding} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
  hover: PropTypes.bool,
};

// Card Header Component
const CardHeader = ({ children, className = '' }) => (
  <div className={`border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 ${className}`}>
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Card Body Component
const CardBody = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Card Footer Component
const CardFooter = ({ children, className = '' }) => (
  <div className={`border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 ${className}`}>
    {children}
  </div>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;