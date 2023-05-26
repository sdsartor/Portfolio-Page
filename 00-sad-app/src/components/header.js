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
                <a href="#id_projects" id="projects" style={{textAlign: "right", marginLeft: "90%", marginRight: "10%"}}>Projects</a>
              
                  <a href="#id_about" id="navigation" style={{textAlign: "right", marginRight: "5%"}}>About Me</a>
                  </div>
              </page-nav-list>
              </div>
          </nav>
          </header>
        )
    }
} 