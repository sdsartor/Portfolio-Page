import React, { Component } from "react";
import images from "../img";
export default class Footer extends Component {
    render() {
        return (
          <div className="footersection">
            <footer>
  <div className="footer">
  <a href="https://github.com/sdsartor">
    <img src={require("../img/github-mark-white.png")} alt="github" id="github"></img></a>
  </div>
</footer>
</div>
        )
    }
}