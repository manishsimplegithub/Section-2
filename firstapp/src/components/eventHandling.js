import { useState } from "react";

const EventHandling = () => {
  let c = 1;

  const [count, setCount] = useState(1);

  const handleClick = () => {
    // alert("Are you Sure? You want to click it!!");
    c++;
    console.log(c);
  };

  const updateState = () => {
    setCount(count + 2);
    console.log(count);
  };

  return (
    <div className="container">
      <h1>Event Handling</h1>
      <h1>NOrmal Variable {c}</h1>
      <h1>State Variable {count}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click it
      </button>

      <button className="btn btn-danger" onClick={updateState}>
        Update the State
      </button>
    </div>
  );
};

export default EventHandling;
