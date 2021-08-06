import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";

import { usePrevious } from "../customHooks/usePrevious";

describe("usePrevious", () => {
  it("should use previous value", () => {
    const Compo = () => {
      const [count, setCount] = useState(0);
      const prevCount = usePrevious(count);
      return (
        <div>
          <p data-testid="count">{count}</p>
          <p data-testid="prev-count">{prevCount}</p>
          <button data-testid="add" onClick={() => setCount(count + 1)}>
            <p>btn</p>
          </button>
        </div>
      );
    };
    const { getByTestId } = render(<Compo />);
    expect(getByTestId("prev-count").textContent).toEqual("");
    expect(getByTestId("count").textContent).toEqual("0");
    fireEvent.click(getByTestId("add"));
    expect(getByTestId("prev-count").textContent).toEqual("0");
    expect(getByTestId("count").textContent).toEqual("1");
    fireEvent.click(getByTestId("add"));
    expect(getByTestId("prev-count").textContent).toEqual("1");
    expect(getByTestId("count").textContent).toEqual("2");
  });
});
