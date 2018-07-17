import React, {Component} from 'react';
import {render} from 'react-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Webpack 4</h1>
      </div>
    )
  }
}

render(<Index/>, document.getElementById('app'));