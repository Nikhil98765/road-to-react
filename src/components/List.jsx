
import React from 'react'
import Item from "./Item.jsx";

export const List = ({list}) => {

  return (
    <ul>
      {list.map(({objectID, ...item}) => (
        <Item
          key={objectID}
          {...item}
        />
      ))}
    </ul>
  );
}
