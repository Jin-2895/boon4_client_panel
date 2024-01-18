import React from "react";

const TextComp = ({ children, variant, className }) => {
  if (variant === "heading") {
    return (
      <h1
        className={`font-[700] text-[1.5rem] font-lato text-[rgba(0, 0, 0, 1)] ${
          className && className
        }`}
      >
        {children}
      </h1>
    );
  } else if (variant === "subTitle") {
    return (
      <h1
        className={`font-[700] text-[1.2rem] font-lato text-[rgba(0, 0, 0, 1)] ${
          className && className
        }`}
      >
        {children}
      </h1>
    );
  }

  return (
    <h1
      className={`font-[700] text-[1.5rem] font-lato text-[rgba(0, 0, 0, 1)] ${
        className && className
      }`}
    >
      {" "}
      {children}
    </h1>
  );
};

export default TextComp;
