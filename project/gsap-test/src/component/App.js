import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import ContentContainer from './ContentContainer';
import LoaderContainer from './LoaderContainer';
import ButtonContainer from './ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);
    // this.tlm2 = new TimelineMax({repeat:-1});
  }
  render() {
    return (
      <div id="main-container">
        <div id="inner-container">
          <HeaderContainer />
          <ContentContainer />
          <LoaderContainer />
          <ButtonContainer />
        </div>
      </div>
    );
  }
}

export default App;
