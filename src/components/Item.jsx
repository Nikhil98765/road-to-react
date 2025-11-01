import React from 'react';

const Item = ({objectID, url, author, num_comments, points, title}) => {
  return (
      <li key={objectID}>
          <span>
            <a href={url}>{title}</a>
            <br/>
          </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
      </li>
  );
};

export default Item;
