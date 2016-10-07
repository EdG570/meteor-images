import React from 'react';

import ImageScore from './progress_bar';

const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} alt={props.image.title}/>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.image.title}</h4>
        <p>{props.image.decription}</p>
        <ImageScore ups={props.image.ups} downs={props.image.downs}/>
      </div>
    </li>
  );
};

export default ImageDetail;