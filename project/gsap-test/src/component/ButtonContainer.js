import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax, TweenMax, Power1, Elastic } from 'gsap';
class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.tlMax = new TimelineMax();
    this.menus = [
      { text: 'Home', link: '/', id: 'menu-home' },
      { text: 'Visi', link: '/visi', id: 'menu-visi' },
      { text: 'Misi', link: '/misi', id: 'menu-misi' },
      { text: 'Contact', link: '/contact', id: 'menu-contact' },
      { text: 'Team', link: '/team', id: 'menu-team' },
    ];
  }
  render() {
    let themenus = this.menus.map((item, index) => {
      return (
        <Link to={item.link}>
          <div key={index} className="container-menu-button">
            <div
              className="menu-button"
              onMouseOver={this.toggleMenuText.bind(this, item.id, true)}
              onMouseLeave={this.toggleMenuText.bind(this, item.id, false)}
            ></div>
            <div id={item.id}>{item.text}</div>
          </div>
        </Link>
      );
    });
    return (
      <div id="button-container">
        <div className="line-menu"></div>
        <div id="container-menu">{themenus}</div>
      </div>
    );
  }
  toggleMenuText(text, isShow) {
    let menuText = document.getElementById(text);
    if (isShow) {
      TweenMax.fromTo(
        menuText,
        0.2,
        { autoAlpha: 0, y: 10, ease: Power1.easeOut },
        { autoAlpha: 1, y: 0, ease: Power1.easeOut },
      );
      return;
    }
    TweenMax.to(menuText, 0.2, { autoAlpha: 0, y: 10, ease: Power1.easeIn });
  }
  componentDidMount() {
    let lineMenu = document.getElementsByClassName('line-menu'),
      containerMenuButton = document.getElementsByClassName('container-menu-button');

    this.tlMax
      .to(lineMenu, 1, { visibility: 'visible', width: '100%', ease: Power1.easeOut }, 8.5)
      .staggerFromTo(
        containerMenuButton,
        0.8,
        { x: -100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: Elastic.easeOut },
        0.1,
      );
  }
}

export default ButtonContainer;
