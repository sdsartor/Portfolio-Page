import React, { Component } from "react";
import images from "../img/index";
export default class Portfolio extends Component {

 

    render() {
        return (
            <>
            <div className="projectspadding">
            <div id="id_projects">
            <h1 style={{fontSize: "48px"}}>Projects</h1>
            </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={require("../img/schedule.jpg")} alt="schedule" style={{width: "500px", height: "300px", borderRadius: " 25px"}}></img>
                      </div>
                      <div className="flip-card-back">
                        <h1>Pilot Aid</h1>
                        <p>Click Link Below</p>
                        <a href="https://sdsartor.github.io/pilot-mate/">https://sdsartor.github.io/pilot-mate/</a>
                      </div>
                    </div>
                  </div>
                  <div id="volley" class="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={require("../img/dog.gif")} style={{width: "500px", height: "300px", borderRadius: " 25px"}} alt="volley"></img>
                      </div>
                      <div className="flip-card-back">
                        <h1>Captains-Quarters App</h1>
                        <p>Click Link Below</p>
                        <a href="https://captains-quarters.herokuapp.com/">https://captains-quarters.herokuapp.com/</a>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={require("../img/DandD.jpg")} alt="Avatar" style={{width: "500px", height: "300px", borderRadius: " 25px"}}></img>
                      </div>
                      <div className="flip-card-back">
                        <h1>Dungeons & Dragons Character Creator and Store Locator</h1>
                        <p>Click Link Below</p>
                        <a href="https://bsidemyself.github.io/Villainous-Lair/index.html">https://bsidemyself.github.io/Villainous-Lair/index.html</a>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={require("../img/quest.jpeg")} alt="Avatar" style={{width: "500px", height: "300px", borderRadius: " 25px"}}></img>
                      </div>
                      <div className="flip-card-back">
                        <h1>Dungeons and Dragons Quest Creator</h1>
                        <p>Click Link Below</p>
                        <a href="https://villainous-quest.herokuapp.com/">https://villainous-quest.herokuapp.com/</a>
                      </div>
                    </div>
                  </div>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                
                  </div>
        </>
        ) 
        
            }
 
        
        }