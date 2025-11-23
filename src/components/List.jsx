
import Item from "./Item.jsx";

export const List = ({ list, deleteHandler }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item
          deleteHandler={deleteHandler}
          {...item}
        />
      ))}
    </ul>
  );
};
