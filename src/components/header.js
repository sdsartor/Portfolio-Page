import React, { Component } from "react";
export default class Header extends Component {
    render() {
        return (
            <header>
            <nav>
            <div className="header">
               
              <page-nav-list>
                <div>
                <img id="face" src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue02&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light' alt="Cartoon Me">
                </img>
                </div>
                <div>
                <a href="#id_projects" id="projects" style={{textAlign: "", marginRight: "1%"}}>Projects</a>
              
                  <a href="#id_about" id="navigation" style={{textAlign: "t", marginRight: "1%"}}>About Me</a>
               

                  <a href="#id_resume" id="resume" style={{textAlign: "", marginRight: "5%"}}>Resume</a>
                  </div>
              </page-nav-list>
              </div>
          </nav>
          </header>
        )
    }
} 