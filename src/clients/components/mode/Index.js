import React, { Component } from 'react';
import Prism from 'prismjs';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import example_1 from './example-1.txt';
import example_2 from './example-2.txt';
import example_3 from './example-3.txt';
import example_4 from './example-4.txt';
import example_5 from './example-5.txt';

export default class Index extends Component {
  render() {
    return (
      <div>
        <b>
          Possible values for mode are: none, development or
          production(default).
        </b>
        {renderSyntakHighlight(example_1)}
        <div className="separator" />
        {renderSyntakHighlight(example_2)}
        <div className="separator" />
        {renderSyntakHighlight(example_3, Prism.languages.diff)}
        <div className="separator" />
        {renderSyntakHighlight(example_4, Prism.languages.diff)}
        <div className="separator" />
        {renderSyntakHighlight(example_5, Prism.languages.diff)}
      </div>
    );
  }
}
