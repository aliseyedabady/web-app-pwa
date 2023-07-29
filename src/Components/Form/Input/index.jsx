import React from "react";

const Input = ({ label = "", props = {} }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm	mb-[0.5rem]">{label}</label>
      <div>
        <input
          className="h-[40px] w-full block focus:outline-none "
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
