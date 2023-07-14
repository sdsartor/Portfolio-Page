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
    <a href="https://www.linkedin.com/in/matthew-sartor-521ba927a/">
    <img src={require("../img/linkedin-logo-png-2026.png")} alt="linkedin" id="linkedin"></img></a>
  </div>
</footer>
</div>
        )
    }
}