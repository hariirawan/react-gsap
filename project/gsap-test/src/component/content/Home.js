import React, { Component } from 'react';
import { TimelineMax, Power4, Power1, Bounce } from 'gsap';
class Home extends Component {
  constructor(props) {
    super(props);
    this.tlMax = new TimelineMax();
  }
  render() {
    let background = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
      return <div key={index} className="inner-container-home"></div>;
    });
    return (
      <div id="container-home">
        {background}
        <div id="content">
          <h1 style={{ marginBottom: '2%' }}>Selamat Datang</h1>
          <div className="child-container-home">
            PT. Nusantara Sukses Teknologi adalah perusahaan yang bergerak dalam bidang software
            engineering dan pengelolaan enterprise data dengan menggunakan solusi sistem cerdas
            (Artificial Intelligent) dan semantic web.
          </div>
        </div>
        <div id="image-container">
          <img src={require('../../public/images/Home.jpg')} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    let containerHome = document.getElementById('container-home'),
      innerContainerHome = document.getElementsByClassName('inner-container-home'),
      content = document.getElementById('content'),
      h1 = document.querySelector('div#content h1'),
      childContainerHome = document.getElementsByClassName('child-container-home'),
      imageContainer = document.getElementById('image-container');

    this.tlMax
      .from(containerHome, 1, { y: 0, autoAlpha: 0, ease: Power4.easeOut })
      .staggerFromTo(
        innerContainerHome,
        0.5,
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: Bounce.easeOut },
        0.08,
      )
      .from(imageContainer, 1, { x: 120, autoAlpha: 0, ease: Power1.easeOut }, 0.9)
      .from(content, 1, { autoAlpha: 0, x: 200, ease: Power4.easeOut })
      .staggerFrom(
        [h1, childContainerHome],
        1.3,
        { autoAlpha: 0, cycle: { y: [-80, 60] }, ease: Power4.easeOut },
        0.3,
      );
  }
}

export default Home;
