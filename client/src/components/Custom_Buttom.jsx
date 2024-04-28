import React from "react";

const Custombuttom = ({ btntype, title, handleClick, styles }) => {
  return (
    <button
      type={btntype}
      className={` font-epilogue font-semibol text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#1dc071] `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Custombuttom;
