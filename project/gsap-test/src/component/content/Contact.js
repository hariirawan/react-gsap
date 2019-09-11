import React, { Component } from 'react';
import { TimelineMax, Power4, Back, Power1, Bounce } from 'gsap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.tlm = new TimelineMax();
  }
  render() {
    let background = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
      return <div key={index} className="inner-container-contact"></div>;
    });
    return (
      <div id="container-contact">
        {background}
        <div id="content">
          <h1 style={{ opacity: 0 }}>Contact Us</h1>
          <div id="child-contact">
            <div className="text-contact">
              Jl. Jati Murni No.30 Jati Padang Ps. Minggu Kota Jakarta Selatan Daerah Khusus Ibukota
              Jakarta 12540
            </div>
            <h2>
              Informasi : info@nusatek.id
              <br />
              Marketing : marketing@nusatek.id
            </h2>
          </div>
        </div>
        <div id="image-container">
          <img src={require('../../public/images/contact.png')} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    let containerContact = document.getElementById('container-contact'),
      innerContainerContact = document.getElementsByClassName('inner-container-contact'),
      content = document.getElementById('content'),
      h1 = document.querySelector('div#content-container h1'),
      h2 = document.querySelector('div#content-container h2'),
      textContact = document.getElementsByClassName('text-contact'),
      imageContainer = document.getElementById('image-container');

    this.tlm
      .from(containerContact, 0.05, { y: 0, autoAlpha: 0, ease: Power4.easeOut })
      .staggerFromTo(
        innerContainerContact,
        0.5,
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: Bounce.easeOut },
        0.08,
      )
      .from(imageContainer, 1, { x: 120, autoAlpha: 0, ease: Power1.easeOut }, 0.9)
      .from(content, 1, { autoAlpha: 0, x: 200, ease: Power4.easeOut })
      .fromTo(h1, 1, { autoAlpha: 0, y: -80 }, { autoAlpha: 1, y: 0, ease: Back.easeOut })
      .staggerFrom(
        [textContact, h2],
        1.3,
        { autoAlpha: 0, cycle: { x: [-40, 40] }, ease: Power4.easeOut },
        0.3,
      );
  }
}

export default Contact;
