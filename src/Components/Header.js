import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home" style={{ backgroundImage: "url(./images/deskredo.png)", backgroundSize: "150vmax"  }}>
        {//<ParticlesBg type="circle" bg={true} />
  }
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Book a Session
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            
          </ul>
        </nav>

        <div className="row banner"  style = {{backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "3px", padding: "10px"}}>
          <div className="banner-text" >
            <Fade bottom>
            
              <h1 className="responsive-headline">{name} Tutoring</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 style = {{color: "white"}}>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#contact" className="button btn project-btn smoothscroll">
                  <i className="fa fa-book"></i>Book a Session
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <div className="row banner" style = {{backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "3px", padding: "10px"}}>
          <h1>HELLO WORLD</h1>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
