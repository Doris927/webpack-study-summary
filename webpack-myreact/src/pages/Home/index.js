import React, { Component } from 'react';
import { HomeWrapper } from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <a className="container container-1" href="#">
          <div className="container-pic" />
          <div className="container-info">
            <h3 className="container-title">笔记</h3>
            <h4 className="container-subtitle">NOTE</h4>
          </div>
        </a>
        <a className="container container-2" href="#">
          <div className="container-pic" />
          <div className="container-info">
            <h3 className="container-title">简历</h3>
            <h4 className="container-subtitle">RESUME</h4>
          </div>
        </a>
        <a className="container container-3" href="#">
          <div className="container-pic" />
          <div className="container-info">
            <h3 className="container-title">作品</h3>
            <h4 className="container-subtitle">DEMO</h4>
          </div>
        </a>
      </HomeWrapper>
    );
  }
}

export default Home;
