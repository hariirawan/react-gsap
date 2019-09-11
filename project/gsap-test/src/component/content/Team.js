import React, { Component } from 'react';
import Gambar from '../../public/images/Purple.png';
import { TimelineMax, Power4, Power1, Bounce } from 'gsap';
class Team extends Component {
  constructor(props) {
    super(props);
    this.tlm = new TimelineMax();
    this.team = [
      {
        nama: 'Syamsul Muttaqin',
        foto: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        jabatan: 'CTO',
      },
      {
        nama: 'Erick',
        foto: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        jabatan: 'CBD',
      },
      {
        nama: 'Arif Susilo',
        foto: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        jabatan: 'COO',
      },
      {
        nama: 'Antonius Widiartono',
        foto: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        jabatan: 'CFO',
      },
      {
        nama: 'Zahid Habiburrahman',
        foto: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        jabatan: 'Mobile Programmer',
      },
      {
        nama: 'Hari Irawan',
        foto: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        jabatan: 'Web Programmer',
      },
    ];
  }
  render() {
    let background = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
      return <div key={index} className="inner-container-team"></div>;
    });
    let team = this.team.map((data, key) => {
      return (
        <div key={key} className="content-team">
          <div className="foto-team">
            <img className="img" src={data.foto} />
          </div>
          <div className="name-team">{data.nama}</div>
          <div className="jabatan-team">{data.jabatan}</div>
        </div>
      );
    });
    return (
      <div id="container-team">
        {background}
        <div id="container-content-team">{team}</div>
      </div>
    );
  }

  componentDidMount() {
    let containerTeam = document.getElementById('container-team'),
      innerContainerTeam = document.getElementsByClassName('inner-container-team'),
      contentTeam = document.getElementsByClassName('content-team'),
      nameTeam = document.getElementsByClassName('name-team'),
      fotoTeam = document.getElementsByClassName('img'),
      jabatanTeam = document.getElementsByClassName('jabatan-team');

    this.tlm
      .from(containerTeam, 0.05, { y: 0, autoAlpha: 0 })
      .staggerFromTo(
        innerContainerTeam,
        0.5,
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: Bounce.easeOut },
        0.08,
      )
      .staggerFrom(
        contentTeam,
        0.3,
        { autoAlpha: 0, cycle: { y: [-100, 100] }, ease: Power4.easeOut },
        0.2,
      )
      .staggerFrom(fotoTeam, 0.5, { autoAlpha: 0, y: -30, ease: Power4.easeOut }, 0.1)
      .staggerFrom(nameTeam, 0.5, { autoAlpha: 0, x: -30, ease: Power4.easeOut }, 0.1)
      .staggerFrom(jabatanTeam, 0.3, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, 0.1);
  }
}

export default Team;
