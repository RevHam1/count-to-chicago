import React from "react";
import Counter from "./components/counter/Counter";
import Time from "./components/time/Time";
import Lower from "./components/lower/Lower";
import "../src/styles/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // text: "",
      chicagoEvent: " Chicago ",
      deadline: "December 25, 2019",
      newDeadline: ""
    };

    this.handleChange = this.handleChange.bind(this);

    this.dateInserter = this.dateInserter.bind(this);
    this.eventInserter = this.eventInserter.bind(this);

    this.changeDeadline = this.changeDeadline.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  handleChange(event) {
    var newEvent = event.target.value;
    this.setState({ chicagoEvent: newEvent });
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  changeDate(event) {
    this.setState({
      newDeadline: event.target.value
    });
  }

  dateInserter(date) {
    this.setState({
      newDeadline: date
    });
  }

  eventInserter(event) {
    this.setState({
      chicagoEvent: event
    });
  }

  render() {
    return (
      <div className="body">
        <div className="container">
          <div className="time">
            <Time />
          </div>

          <div className="App">
            <div className="App-title">
              Countdown to {this.state.chicagoEvent}
              <br />
              <div className="span">
                <span>{this.state.deadline}</span> <br />
              </div>
            </div>

            <Counter deadline={this.state.deadline} />

            <div className="Deadline-input">
              <div className="input-div">
                <input
                  className="inputs"
                  value={this.state.chicagoEvent}
                  onChange={this.handleChange}
                  placeholder="Name of event"
                />

                <input
                  className="inputs"
                  value={this.state.newDeadline}
                  onChange={this.changeDate}
                  placeholder="Month day, year"
                />
              </div>
              <button className="submit" onClick={this.changeDeadline}>
                Submit
              </button>
              <div className="instructions">
                <br />
                <p>
                  To auto-display Event and Countdown time at the top, double
                  click an item below
                </p>
                <p>
                  To enter your own event place a name & date in the above boxes
                  then click submit
                </p>
              </div>
            </div>
          </div>
          <Lower
            dateInserter={this.dateInserter}
            eventInserter={this.eventInserter}
            changeDeadline={this.changeDeadline}
          />
        </div>
      </div>
    );
  }
}

export default App;
