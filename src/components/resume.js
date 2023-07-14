import React, {Component} from "react";
export default class Resume extends Component {

 

    render() {
        
        return (
<div id="id_resume">
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <button  id="resume-title">  
  <a
     className="button"
     href={require("../img/Resume.pdf")}
     download
     >
    Download Resume
  </a></button>
  <div className="arrow">
  <a>
    <img src={require("../img/arrow.gif")} alt="arrow" id="arrow"></img>
  </a>
  </div>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
</div>

        )
    }
}
