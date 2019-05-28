import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";

class Home extends Component {
  render() {
    let logos = [
      { label: "Guru", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") },
      { label: "kdy", src: require("../../Assets/images/clientLogos/guru.png") }
    ];
    let logo = logos.map((logo, i) => <img key={i} src={logo.src} alt={logo.label} />);

    let testimonial = [
      {
        name: "Joe Schmow",
        label: "CEO, Guru Energy",
        text: "This is a testimonial example, this is how it'll look so yeah"
      },
      {
        name: "Joe Schmow",
        label: "CEO, Guru Energy",
        text: "I'm a pretty big fan of this look and this slider it even has touch capabikitites"
      },
      {
        name: "Joe Schmow",
        label: "CEO, Guru Energy",
        text: "I remember using it a loong time ago but it got better since then"
      }
    ];
    let testimonials = testimonial.map((testimonial, i) => (
      <div key={i}>
        <div className="testimonialContainer">
          <i className="fas fa-quote-left" />
          <h2 alt={testimonial.label}>{testimonial.text}</h2>
          <i className="fas fa-quote-right" />
        </div>
        <h3>
          {testimonial.name} <span>{testimonial.label}</span>
        </h3>
      </div>
    ));

    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

    return (
      <div className="container-fluid">
        <div className="row homeIntroLine">
          <h1>
            Lights. Camera. <span>Action.</span>
          </h1>
        </div>
        <div className="row videoBackground">
          <div className="videoWrapper">
            <div className="resposiveVideoContainer ">
              <iframe
                title="kdy"
                src="https://player.vimeo.com/video/280309304?title=0&byline=0&portrait=0"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen={true}
              />
            </div>
          </div>
        </div>
        <div className="row homeStatement">
          <h2>Montreal-Toronto Production Team</h2>
          <h3>
            Welcome to kdy productions. We're here to put your vision on video. We have an experienced team that take pride in what we do. From script
            writing to the final touches, we put care in every step of the production process.
          </h3>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-pencil-alt fa-3x" />
                  <h4>Video Production</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma
                    cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-video fa-3x" />
                  <h4>Content Development</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma
                    cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-desktop fa-3x" />
                  <h4>Live Events</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma
                    cut a bitch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row clientList">
          <h1>Client List</h1>
          <div className="clientListLogos">{logo}</div>
        </div>
        <div className="row testimonials">
          <Parallax blur={4} bgImage={require("../../Assets/images/headerPhotos/mtl4.jpg")} bgImageAlt="testimonial" strength={600}>
            <h1>Testimonials</h1>
            <Slider {...sliderSettings}>{testimonials}</Slider>
          </Parallax>
        </div>
        <div className="row callToAction">
          <h1>Call to action</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <div className=" box">
                  <i className="fas fa-chart-line fa-3x" />
                  <h4>increase revenue</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma
                    cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className=" box">
                  <i className="far fa-smile-wink fa-3x" />
                  <h4>be happy</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma
                    cut a bitch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;