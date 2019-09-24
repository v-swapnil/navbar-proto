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
        <p>This is a booking screen</p>
        <div
          style={{
            height: "200px",
            backgroundColor: "red"
          }}
        ></div>

        <div
          style={{
            height: "200px",
            backgroundColor: "green"
          }}
        ></div>
        <p>booking Component</p>
        <div
          style={{
            height: "200px",
            backgroundColor: "blue"
          }}
        ></div>
        <p>booking Component</p>
        <p>booking Component</p>
        <p>booking Component</p>
        <p>booking Component</p>
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
