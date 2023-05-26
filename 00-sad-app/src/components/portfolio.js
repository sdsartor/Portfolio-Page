import React, { Component } from "react";
export default class Portfolio extends Component {

 

    render() {
        return (
            <>
            <div className="projectspadding">
            <div id="id_projects">
            <h1>Projects</h1>
            </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">

                        <img src="00-sad-app\public\images\schedule.jpg" alt="schedule"></img>
                      </div>
                      <div className="flip-card-back">
                        <h1>Scheduler</h1>
                        <p>Click Link Below</p>
                        <a href="https://sdsartor.github.io/Weekly-Scheduler/">https://sdsartor.github.io/Weekly-Scheduler/</a>
                      </div>
                    </div>
                  </div>
                  <div id="volley" class="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src="./volley.jpg" alt="volley"></img>
                      </div>
                      <div className="flip-card-back">
                        <h1>README Template Generator</h1>
                        <p>Click Link Below</p>
                        <a href="https://github.com/sdsartor/README-generator">https://github.com/sdsartor/README-generator</a>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src="DandD.jpg" alt="Avatar"></img>
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
                        <img src="quest.jpeg" alt="Avatar"></img>
                      </div>
                      <div className="flip-card-back">
                        <h1>Dungeons and Dragons Quest Creator</h1>
                        <p>Click Link Below</p>
                        <a href="https://villainous-quest.herokuapp.com/">https://villainous-quest.herokuapp.com/</a>
                      </div>
                    </div>
                  </div>
                  </div>
        </>
        ) 
        
            }
 
        
        }