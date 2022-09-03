import React from "react";

function Avatar({ name, imageUrl }) {
  return (
    <div>
      <div className="avatar">
        <div className="w-36 rounded-full">
          <img src={imageUrl} />
        </div>
      </div>
      <p className="text-xl font-semibold">{name}</p>
    </div>
  );
}

export default Avatar;
