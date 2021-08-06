import { useState } from "react";
import { v4 } from "uuid";
import "./App.css";
import Item from "./Item";

const App = () => {
  const [list, setList] = useState([]);
  console.log(list);

  const onClick = () => {
    const id = v4();
    list.push(id);
    setList(list);
  };

  return (
    <div>
      <button
        data-testid="btn"
        onClick={onClick}
        style={{ width: "100%", height: 30 }}
      >
        Add item
      </button>
      <ul>
        {list.map((id, index) => (
          <Item key={index} value={id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
