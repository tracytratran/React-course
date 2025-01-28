function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li>
      <input
        id={item.id}
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <label
        htmlFor={item.id}
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
