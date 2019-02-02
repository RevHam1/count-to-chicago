import React, { Component } from "react";
// import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  /*This runs before component completely renders onto the application; use 
because to calculate the passed props data and the current days, hours, 
minutes and seconds needed before rendering data onto the screen*/
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  /*This runs after the component renders; setInterval allows to run code at 
specific interval, it takes a function and count  */
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }
  //return num  < 10 ? '0' + num : num; } a ternary expression

  //Using methods in js Date object time will be a weird # must change format
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const day = Math.floor(time) / (1000 * 60 * 60 * 24);
    const hour = (day - Math.floor(day)) * 24;
    const minute = (hour - Math.floor(hour)) * 60;
    const second = (minute - Math.floor(minute)) * 60;

    //Re-assigning varibles to itself to assure rounding
    const days = Math.floor(day);
    const hours = Math.floor(hour);
    const minutes = Math.floor(minute);
    const seconds = Math.floor(second);

    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div className="counting">
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hrs</div>
        <div className="Clock-minutes">
          {this.leading0(this.state.minutes)} mins
        </div>
        <div className="Clock-seconds">
          {this.leading0(this.state.seconds)} secs
        </div>
      </div>
    );
  }
}

export default Counter;
