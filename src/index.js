import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Suma extends React.Component {
  constructor(props) {
    super(props);
    this.state = { f1: 0, f2: 0, result: 0 };
    this.cambionumuno = this.cambionumuno.bind(this);
    this.cambionumdos = this.cambionumdos.bind(this);
  }
  funcionsuma() {
    var s = this.state.f1 + this.state.f2;
    return Math.round(s * 100) / 100;
  }
  cambionumuno(evt) {
    this.setState({ f1: Number(evt.target.value) });
  }
  cambionumdos(evt) {
    this.setState({ f2: Number(evt.target.value) });
  }
  render() {
    var suma = this.funcionsuma();
    return (
      <form>
        <label>
          <p>
            Núm 1
            <input type="number" name="num1" onChange={this.cambionumuno} />
          </p>
          <p>
            Núm 2
            <input type="number" name="num2" onChange={this.cambionumdos} />
          </p>
          Suma =
          <input type="text" value={suma} readOnly />
        </label>
      </form>
    );
  }
}
ReactDOM.render(<Suma />, document.getElementById("root"));
