import React, { Component } from 'react';
import { TimelineMax, Power1, Back } from 'gsap';

class LoaderContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let dots = [1, 2, 3, 4, 5].map(index => {
      return <div key={index} className="loader-dot"></div>;
    });
    return (
      <div id="loader-container">
        <div id="loader-dot-container">{dots}</div>
      </div>
    );
  }
  componentDidMount() {
    let loaderContainer = document.getElementById('loader-container'),
      loaderDot = document.getElementsByClassName('loader-dot');
    let tlMax = new TimelineMax();
    let tlMaxRepeat = new TimelineMax({
      repeat: 2,
      onComplete: () => {
        tlMax.staggerFromTo(
          loaderDot,
          0.5,
          { x: 0, autoAlpha: 1 },
          { x: 100, autoAlpha: 0, ease: Power1.easeIn },
          0.2,
        );
      },
    });

    tlMaxRepeat.staggerFromTo(
      loaderDot,
      0.5,
      {
        y: -20,
        autoAlpha: 0,
      },
      { y: 0, autoAlpha: 1, ease: Back.easeOut },
      0.3,
    );
  }
}

export default LoaderContainer;
