import React from 'react';

const ImageDetail = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <img src={props.source} alt={props.title}/>
    </li>
  );
};

export default ImageDetail;