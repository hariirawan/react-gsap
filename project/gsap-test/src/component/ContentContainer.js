import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './content/Home';
import Visi from './content/Visi';
import Misi from './content/Misi';
import Contact from './content/Contact';
import Team from './content/Team';
import { TimelineMax, Power1 } from 'gsap';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.tlMax = new TimelineMax();
    this.route = [
      { path: '/home', component: Home },
      { path: '/visi', component: Visi },
      { path: '/misi', component: Misi },
      { path: '/contact', component: Contact },
      { path: '/team', component: Team },
    ];
  }
  render() {
    let theroute = this.route.map((item, index) => {
      return <Route key={index} path={item.path} component={item.component} />;
    });
    return (
      <div id="content-container">
        <Route exact path="/" component={Home} />
        {theroute}
      </div>
    );
  }
  componentDidMount() {
    let contentContainer = document.getElementById('content-container');
    this.tlMax.from(contentContainer, 1, { y: -200, autoAlpha: 0, ease: Power1.easeOut }, 8.7);
  }
}

export default ContentContainer;
