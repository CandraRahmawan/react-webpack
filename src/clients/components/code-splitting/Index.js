import React, {Component} from 'react';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import Prism from 'prismjs';
import example_1 from './example-1.txt';
import example_2 from './example-2.txt';
import example_3 from './example-3.txt';
import example_4 from './example-4.txt';

export default class Index extends Component {
  render() {
    return (
      <div>
        <b>Code splitting is one of the most compelling features of webpack. This feature allows you to split your code
          into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller
          bundles and control resource load prioritization which, if used correctly, can have a major impact on load
          time.
        </b>
        {renderSyntakHighlight(example_1, Prism.languages.diff)}
        <b>result will be like</b>
        {renderSyntakHighlight(example_2)}
        <div className="separator"/>
        {renderSyntakHighlight(example_3, Prism.languages.diff)}
        <b>result will be like</b>
        {renderSyntakHighlight(example_4)}
      </div>
    )
  }
}