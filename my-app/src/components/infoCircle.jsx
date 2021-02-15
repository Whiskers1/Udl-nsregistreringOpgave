import React, { Component } from "react";

class InfoCircle extends Component {
  render() {
    return (
      <div>
        <h4 className="text-center">{this.props.title}</h4>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background:
              "linear-gradient(" +
              this.props.color1 +
              "," +
              this.props.color2 +
              ")",
          }}
        >
          <div className="text-center text-white fs-3">{this.props.value}</div>
        </div>
      </div>
    );
  }
}

export default InfoCircle;
