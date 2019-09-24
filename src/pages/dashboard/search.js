import React, { PureComponent } from "react";

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <div>
        <p>This is a dashboard screen</p>
        <div
          style={{
            height: "200px",
            backgroundColor: "red"
          }}
        ></div>
        <p>dashboard Component</p>
        <div
          style={{
            height: "200px",
            backgroundColor: "green"
          }}
        ></div>
        <p>dashboard Component</p>
        <div
          style={{
            height: "200px",
            backgroundColor: "blue"
          }}
        ></div>
        <div
          style={{
            height: "200px",
            backgroundColor: "red"
          }}
        ></div>
      </div>
    );
  }
}

export default Search;
