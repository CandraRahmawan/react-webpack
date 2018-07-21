import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import MainContent from './components/MainContent';
import '../assets/styles.scss';
import webpackImg from '../assets/webpack.png';

class Index extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper-image">
          <img src={webpackImg} />
        </div>
        <h2>Build your assets in ReactJS with Webpack 4</h2>
        <MainContent />
      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));
