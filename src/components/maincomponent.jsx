import React, { Component } from "react";
import List from "./list";
import "bootstrap/dist/css/bootstrap.min.css";

class MainComponent extends Component {
  state = {
    list: [
      { name: "Aditi Chourasia", id: "1", type: "full-time" },
      { name: "Kajal Parkhey", id: "2", type: "full-time" },
      { name: "Shweta Rawat", id: "3", type: "part-time" },
      { name: "Neena Gupta", id: "4", type: "part-time" },
      { name: "Shreya Hanswani", id: "5", type: "part-time" },
      { name: "Ruhi Bhalla", id: "6", type: "part-time" },
      { name: "Jaspreet Kaur", id: "7", type: "part-time" },
      { name: "Garima Rajput", id: "8", type: "part-time" },
    ],
  };

  styles = {};

  render() {
    return (
      <div>
        <div className="row" style={{ height: "40rem" }}>
          <List
            heading="Part-time Interns"
            list={this.state.list.filter((item) => item.type !== "full-time")}
          />
          <List
            heading="full-time Interns"
            list={this.state.list.filter((item) => item.type !== "part-time")}
          />
        </div>
      </div>
    );
  }
}

export default MainComponent;
