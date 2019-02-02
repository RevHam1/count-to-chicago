import React, { Component } from "react";
// import "./time.css";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  currentTime() {
    this.setState({
      time: new Date()
    });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <div className="time">
        {this.state.time.toLocaleDateString()} <br />
        {this.state.time.toLocaleTimeString()}
      </div>
    );
  }
}

export default Time;
