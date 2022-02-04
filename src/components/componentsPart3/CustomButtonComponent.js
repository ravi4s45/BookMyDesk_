import React from "react";


const Button = ({

    backgroundColor,
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
          style={{
          
          backgroundColor,
              color,
         border,
         borderRadius: radius,
         height,
              width
         
      }}
    >
    {children}
    </button>
  );
}

export default Button;