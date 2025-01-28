import { useState } from "react";
import Item from "./Item";

function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  handleClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  function sortByDescription(items) {
    // return items.sort((a, b) => {
    //   if (a.description < b.description) {
    //     return -1;
    //   }
    //   return 1;
    // });
    return items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  function sortByPackedStatus(items) {
    return items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function sortItems(items) {
    if (sortBy === "input") {
      return items;
    } else if (sortBy === "description") {
      return sortByDescription(items);
    } else return sortByPackedStatus(items);
  }

  return (
    <div className="list">
      <ul>
        {sortItems(items).map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearItems}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
