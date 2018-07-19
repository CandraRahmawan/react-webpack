import React, {Component} from 'react';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import example_1 from './example-1.txt';
import example_2 from './example-2.txt';
import example_3 from './example-3.txt';

export default class Index extends Component {
  render() {
    return (
      <div>
        <b>Single Entry : </b>
        {renderSyntakHighlight(example_1)}
        {renderSyntakHighlight(example_2)}
        <div className="separator"/>
        <b>Multiple Entry</b>
        {renderSyntakHighlight(example_3)}
      </div>
    )
  }
}