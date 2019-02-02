import React, { Component } from "react";
// import "./lower.css";
import axios from "axios";
import moment from "moment";

class Lower extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?apikey=fmTj6tMFhW1yjqhNhe1aLYa5IiWHNP7X&city=chicago"
      )
      .then(res => {
        this.setState(
          {
            events: res.data._embedded.events
          },
          () => {}
        );
      });
  }

  returnEvents() {
    let elements = this.state.events.map((x, i) => {
      const resultDate = moment(x.dates.start.localDate).format("ll");
      const resultTime = moment(x.dates.start.localTime, "HH:mm").format(
        "h:mm a"
      );
      //   console.log(x.dates.start.localDate);
      return (
        <div key={i} className="eventContainer">
          <ol
            className="block"
            onClick={() => {
              this.props.dateInserter(resultDate + " " + resultTime);
              this.props.eventInserter(x.name);
              this.props.changeDeadline();
            }}
          >
            <img
              src={x.images[0].url}
              alt={x.name}
              className="event-img"
              //   onClick={() => console.log(resultDate)}
              //   onClick={() => console.log(x.name)}
              //   onClick={() => {
              //     this.props.dateInserter(resultDate + " " + resultTime);
              //     this.props.eventInserter(x.name);
              //     this.props.changeDeadline();
              //   }}
            />
            {x.name} {resultDate} at {resultTime} {x.dates.status.code}
          </ol>
        </div>
      );
    });
    return elements;
  }

  render() {
    return (
      <div>
        <div className="wrapper">{this.returnEvents()}</div>
        <br />
        {/* <button onClick={this.props.changeDate}>Update App the Parent</button> */}
      </div>
    );
  }
}

export default Lower;
