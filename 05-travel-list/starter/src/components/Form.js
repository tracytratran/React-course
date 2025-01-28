import { useState } from "react";

function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  // console.log(description);
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    // console.log(e);
    setDescription(e.target.value);
  }

  function handleSelect(e) {
    console.log(e);
    // const options = e.target;
    // for (let i = 1; i < options.length; i++) {
    //   if (options[i].selected) {
    //     console.log(options[i].value);
    //     setQuantity(options[i].value);
    //   }
    // }
    setQuantity(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleSelect}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* {Array.from({ length: 20 }, (_, i) => i + 1).filter((num) => (
          {e.target[num].selected === true} &&
          <option value={num} key={num}>{num}</option>
        ))} */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
