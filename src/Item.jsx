import React from "react";

/**
 * @todo internal render count is working ok, but the component is rendering more than it needs.
 * @todo refactor this to be a functional compo instead
 * */

export default class Item extends React.Component {
  renderCount = 0;

  render() {
    this.renderCount = ++this.renderCount;
    return (
      <li
        data-testid="item"
        style={{ backgroundColor: "lightblue", marginTop: 10 }}
      >
        <p>ID: {this.props.value}</p>
        <small>
          <strong>
            (<span data-testid="count">{this.renderCount}</span> renders)
          </strong>
        </small>
      </li>
    );
  }
}
