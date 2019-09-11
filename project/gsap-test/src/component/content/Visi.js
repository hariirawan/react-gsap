import React, { Component } from 'react';
import { TimelineMax, Power4, Bounce, Power1 } from 'gsap';

class Visi extends Component {
  constructor(props) {
    super(props);
    this.tlm = new TimelineMax();
  }
  render() {
    let background = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
      return <div key={index} className="inner-container-visi"></div>;
    });
    return (
      <div id="container-visi">
        {background}
        <div id="content">
          <h1 style={{ textAlign: 'center' }}>Visi</h1>
          <p className="content-visi">
            Menjadi perusahaan teknologi informasi terintegrasi yang terkemuka dengan support system
            yang unggul, inovatif dan terpercaya sehingga memberikan manfaat sebesar-besarnya bagi
            bangsa Indonesia maupun pengguna secara luas dengan menjawab serta mempersiapkan
            kebutuhan masa depan.
          </p>
        </div>
        <div id="image-container">
          <img src={require('../../public/images/visi.png')} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    let containerVisi = document.getElementById('container-visi'),
      innerContainerVisi = document.getElementsByClassName('inner-container-visi'),
      content = document.getElementById('content'),
      h1 = document.querySelector('div#content-container h1'),
      contentVisi = document.getElementsByClassName('content-visi'),
      imageContainer = document.getElementById('image-container');

    this.tlm
      .from(containerVisi, 0.05, { y: 0, autoAlpha: 0, ease: Power4.easeOut })
      .staggerFromTo(
        innerContainerVisi,
        0.5,
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: Bounce.easeOut },
        0.08,
      )
      .from(imageContainer, 1, { x: 120, autoAlpha: 0, ease: Power1.easeOut }, 0.9)
      .from(content, 1, { autoAlpha: 0, x: 200, ease: Power4.easeOut })
      .staggerFrom(
        [h1, contentVisi],
        1.3,
        { autoAlpha: 0, cycle: { y: [-80, 60] }, ease: Power4.easeOut },
        0.6,
      );
  }
}

export default Visi;
