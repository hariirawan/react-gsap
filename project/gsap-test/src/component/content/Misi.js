import React, { Component } from 'react';
import { TimelineMax, Power4, Bounce, Power1 } from 'gsap';

class Misi extends Component {
  constructor(props) {
    super(props);
    this.tlm = new TimelineMax();
    this.misi = [
      {
        id: 1,
        text:
          'Membangun integrated smart application yang bermanfaat dan menjadi rujukan seluruh pengguna untuk memudahkan menjalankan aktivitasnya',
      },
      {
        id: 2,
        text: 'Menjadi mitra dengan solusi inovatif dan terpercaya.',
      },
      {
        id: 3,
        text:
          'Penyedia data dan informasi professional yang taat pada komitmen serta peraturan yang berlaku dengan berorientasikan kepuasan pengguna.',
      },
      {
        id: 4,
        text: 'Memberikan serta mengelola logika data dan informasi cerdas yang professional.',
      },
      {
        id: 5,
        text:
          'Menanamkan kecerdasan buatan yang terintegrasi pada setiap data dan aplikasi yang dikelola.',
      },
    ];
  }
  render() {
    let background = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
      return <div key={index} className="inner-container-misi"></div>;
    });
    return (
      <div id="container-misi">
        {background}
        <div id="content">
          <h1 style={{ textAlign: 'center' }}>Misi</h1>
          <ul>
            {this.misi.map((misi, index) => {
              return <li key={index}>{misi.text}</li>;
            })}
          </ul>
        </div>
        <div id="image-container">
          <img src={require('../../public/images/misi.png')} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    let containerMisi = document.getElementById('container-misi'),
      innerContainerMisi = document.getElementsByClassName('inner-container-misi'),
      content = document.getElementById('content'),
      h1 = document.querySelector('div#content h1'),
      li = document.getElementsByTagName('li'),
      imageContainer = document.getElementById('image-container');

    this.tlm
      .from(containerMisi, 0.05, { y: 0, autoAlpha: 0, ease: Power4.easeOut })
      .staggerFromTo(
        innerContainerMisi,
        0.5,
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: Bounce.easeOut },
        0.08,
      )
      .from(imageContainer, 1, { x: 120, autoAlpha: 0, ease: Power1.easeOut }, 0.9)
      .from(content, 1, { autoAlpha: 0, x: 200, ease: Power4.easeOut })
      .from(h1, 1, { y: 80, autoAlpha: 0, ease: Power1.easeOut })
      .staggerFrom(
        li,
        3.5,
        { opacity: 0, autoAlpha: 0, cycle: { x: [-70, 70] }, ease: Power4.easeOut },
        0.4,
      );
  }
}

export default Misi;
