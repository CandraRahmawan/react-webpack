import React, { Component } from 'react';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import example_1 from './example-1.txt';
import example_2 from './example-2.txt';

export default class Index extends Component {
  render() {
    return (
      <div>
        <b>Example</b>
        {renderSyntakHighlight(example_1)}
        <div className="separator" />
        {renderSyntakHighlight(example_2)}
      </div>
    );
  }
}
