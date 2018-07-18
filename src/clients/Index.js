import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import Contents from './components/Contents';
import '../assets/styles.scss';

class Index extends Component {
  render() {
    return (
      <div className="container">
        <h2>Build your assets in ReactJS with Webpack 4</h2>
        <Contents/>
      </div>
    )
  }
}

render(<Index/>, document.getElementById('app'));