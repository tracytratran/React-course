import { useState } from "react";

function App() {
  const [price, setPrice] = useState("");
  const [rating1, setRating1] = useState("amazing");
  const [rating2, setRating2] = useState("amazing");
  const options = [
    {
      value: "dissatisfied",
      label: "Dissatisfied (0%)",
    },
    {
      value: "okay",
      label: "It was okay (5%)",
    },
    {
      value: "good",
      label: "It was good (10%)",
    },
    {
      value: "amazing",
      label: "Absolutely amazing (20%)",
    },
  ];

  const tip1 = handleCalculateTip(price, rating1);
  const tip2 = handleCalculateTip(price, rating2);

  function handleChangeValue(e) {
    setPrice(e.target.value);
  }

  function handleCalculateTip(price, rating) {
    let calculatedTip = 0;
    if (rating === "amazing") {
      return (calculatedTip = (price * 20) / 100);
    } else if (rating === "good") {
      return (calculatedTip = (price * 10) / 100);
    } else if (rating === "okay") {
      return (calculatedTip = (price * 5) / 100);
    }

    return calculatedTip;
  }

  function handleReset() {
    setPrice("");
    setRating1("amazing");
    setRating2("amazing");
  }

  return (
    <div>
      <Input price={price} handleChangeValue={handleChangeValue}>
        How much was the bill?{" "}
      </Input>
      <Dropdown value={rating1} onChange={setRating1} options={options}>
        How did you like the service?{" "}
      </Dropdown>
      <Dropdown value={rating2} onChange={setRating2} options={options}>
        How did your friend like the service?{" "}
      </Dropdown>
      <Output price={price} tip1={tip1} tip2={tip2} />
      <Reset onClick={handleReset} />
    </div>
  );
}

export default App;

function Input({ price, handleChangeValue, children }) {
  return (
    <div>
      {children}
      <input
        type="number"
        placeholder="Bill value"
        value={price}
        onChange={handleChangeValue}
      />
    </div>
  );
}

function Dropdown({ value, onChange, options, children }) {
  return (
    <div>
      {children}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

function Output({ price, tip1, tip2 }) {
  return (
    <div>
      {price > 0 && (
        <h2>
          You pay {Number(price) + Number(tip1) + Number(tip2)} ($
          {Number(price)} + ${Number(tip1) + Number(tip2)} tip)
        </h2>
      )}
    </div>
  );
}

function Reset({ onClick }) {
  return <button onClick={onClick}>Reset</button>;
}
