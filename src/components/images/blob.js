import React from "react"

const Blob = ({className, fill}) => {

  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill={`${fill}`} d="M43.3,-46.6C55.8,-41.1,65.4,-27.1,71.4,-10.1C77.4,7,79.8,27.2,72.2,42.8C64.5,58.3,46.8,69.1,29.7,70.4C12.7,71.7,-3.7,63.4,-19.3,56.3C-35,49.3,-49.9,43.3,-58.9,31.9C-67.9,20.6,-71.1,3.7,-63.6,-6.4C-56,-16.4,-37.7,-19.7,-25.3,-25.3C-12.9,-30.9,-6.5,-38.7,4.5,-44.1C15.4,-49.4,30.7,-52.2,43.3,-46.6Z" transform="translate(100 100)" />
    </svg>
  );
}

export default Blob;
