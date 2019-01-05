import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Parallax } from "react-parallax";

class Header extends Component {
  parallaxImage(param) {
    switch (param) {
      case "/":
        return [require("../Assets/images/mtl.png"), "", "", ""];
      case "/services":
        return [
          require("../Assets/images/mtl.png"),
          "Services",
          ".",
          "Different projects require different services"
        ];
      case "/portfolio":
        return [
          require("../Assets/images/mtl3.jpg"),
          "Portfolio",
          ".",
          "Let our work speak for itself"
        ];
      case "/about":
        return [
          require("../Assets/images/mtl.png"),
          "Our Team",
          ".",
          "Take a look at the team"
        ];
      case "/contact-us":
        return [
          require("../Assets/images/mtl4.jpg"),
          "Contact Us",
          ".",
          "We're ready, give us a call"
        ];
      default:
        return [
          require("../Assets/images/mtl4.jpg"),
          "404 Page Not Found",
          ".",
          "hmm this page doesnt exist"
        ];
    }
  }
  // className="container homeHeaderContent"
  homeHeaderContent(param) {
    return param === "/"
      ? { className: " container homeHeaderContent" }
      : { className: "hidden" };
  }

  render() {
    return (
      <Parallax
        className="parallax"
        blur={{ min: -9, max: 15 }}
        bgImage={this.parallaxImage(this.props.location.pathname)[0]}
        bgImageAlt="Parallax Background Image"
        strength={-140}
      >
        <div {...this.homeHeaderContent(this.props.location.pathname)}>
          <div className="row ">
            <div className="col-xs-12">
              <img
                className="logo"
                src={require("../Assets/images/logoWhite.png")}
                alt="KDY"
              />
            </div>
            <div className="col-xs-12 buttonWrapper">
              <button type="button" className="btn btn-primary ">
                Get A Quote
              </button>
              <button type="button" className="btn btn-success">
                (514) 559-0578
              </button>
            </div>
          </div>
        </div>

        <div className="parallaxTextContainer">
          <h1>
            {this.parallaxImage(this.props.location.pathname)[1]}
            <span>{this.parallaxImage(this.props.location.pathname)[2]}</span>
          </h1>
          <h2>{this.parallaxImage(this.props.location.pathname)[3]}</h2>
        </div>
        <div className="parallax-image-container" />
      </Parallax>
    );
  }
}

export default withRouter(Header);
