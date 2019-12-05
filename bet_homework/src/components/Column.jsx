import React from "react";
import SubColumn from "./SubColumn";

let eyeColors = ["Green", "Brown", "Blue"];

const Column = ({ users }) => {
  return (
    <div className="columns">
      {eyeColors.map(color => (
        <div className='subcolumn'>
          <SubColumn key={color} users={users} _eyeColor={color} />
        </div>
      ))}
    </div>
  );
};

export default Column;
