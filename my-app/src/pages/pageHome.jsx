import React, { Component } from "react";
import axios from "axios";
import InfoCircle from "../components/infoCircle";
import HomeTables from "../components/homeTables";

class PageHome extends Component {
  state = {
    lendings: [],
    forsent: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3200/lendings").then((res) => {
      this.setState({
        lendings: res.data,
        forsent: res.data.filter(
          (item) => new Date(item.Udløbsdato).getTime() < new Date().getTime()
        ),
      });
      //console.log(this.state);
    });
  }

  handleAflever = (id) => {
    axios.delete("http://localhost:3200/lendings/" + id).then((res) => {
      axios.get("http://localhost:3200/lendings").then((res) => {
        this.setState({
          lendings: res.data,
          forsent: res.data.filter(
            (item) => new Date(item.Udløbsdato).getTime() < new Date().getTime()
          ),
        });
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-evenly" style={{ height: 200 }}>
          <InfoCircle
            title="Udlåns"
            value={this.state.lendings.length}
            color1="Purple"
            color2="Plum"
          />
          <InfoCircle
            title="Foresent"
            value={this.state.forsent.length}
            color1="red"
            color2="LightPink "
          />
        </div>
        <HomeTables
          onAflever={this.handleAflever}
          forsent={this.state.forsent}
          lendings={this.state.lendings}
        />
      </React.Fragment>
    );
  }
}

export default PageHome;
