import React from "react";

const SubColumn = ({ users, _eyeColor }) => {
  return (
    <div>
      <h3 style={{borderBottom:'1px solid white',width:'100%'}}>{_eyeColor}</h3>
      {users.map(
        ({ _id, name:{first,last}, eyeColor }) =>
          eyeColor === _eyeColor.toLowerCase() && (
            <div key={_id}>
              <h4>
                {first} {last}
              </h4>
            </div>
          )
      )}
    </div>
  );
};

export default SubColumn;
