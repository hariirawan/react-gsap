import React, { Component } from 'react';
import { TimelineMax, Bounce, Power4 } from 'gsap';

class HeaderContainer extends Component {
  render() {
    return (
      <div id="header-container">
        <img className="company-logo" src={require('../public/images/nst-logo.png')} />
        <div className="company-name">Nusantara Sukses Teknologi</div>
      </div>
    );
  }
  waitLoader() {
    let headerContainer = document.getElementById('header-container');
    this.props.loaderComplate(headerContainer);
  }
  componentDidMount() {
    let headerContainer = document.getElementById('header-container'),
      companyLogo = document.getElementsByClassName('company-logo'),
      companyName = document.getElementsByClassName('company-name');
    let tmax = new TimelineMax();
    tmax
      .fromTo(
        companyLogo,
        2.2,
        { css: { y: -50, autoAlpha: 0 } },
        { css: { y: 0, autoAlpha: 1 }, ease: Bounce.easeOut },
        7,
      )
      .fromTo(
        companyName,
        2,
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: Power4.easeOut },
        7.5,
      );
  }
}

export default HeaderContainer;
