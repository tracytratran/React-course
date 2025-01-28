function Stats({ items }) {
  if (!items.length)
    return (
      <em className="stats">
        <p>Start adding some items to your packing list 🚀</p>
      </em>
    );

  const numAllItems = items.length;

  const numPackedItems = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPackedItems / numAllItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `🧳 You have ${numAllItems} items on your list, and you already packed
          ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
