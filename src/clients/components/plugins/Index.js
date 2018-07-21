import React, { Component } from 'react';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import Prism from 'prismjs';
import html_plugin_1 from './html-plugin-1.txt';
import html_plugin_2 from './html-plugin-2.txt';
import html_plugin_3 from './html-plugin-3.txt';
import extract_css_1 from './extract-css-1.txt';
import extract_css_2 from './extract-css-2.txt';
import extract_css_3 from './extract-css-3.txt';

export default class Index extends Component {
  render() {
    return (
      <div>
        <h3>HtmlWebpackPlugin</h3>
        <b>Install</b>
        {renderSyntakHighlight(html_plugin_1)}
        <b>Usage</b>
        {renderSyntakHighlight(html_plugin_2)}
        <b>Output</b>
        {renderSyntakHighlight(html_plugin_3, Prism.languages.markup)}
        <div className="separator" />
        <h3>MiniCssExtractPlugin</h3>
        <b>Install</b>
        {renderSyntakHighlight(extract_css_1)}
        <b>Usage</b>
        {renderSyntakHighlight(extract_css_2)}
        <b>
          This plugin should be used only on production builds without
          style-loader in the loaders chain, especially if you want to have HMR
          in development.
        </b>
        {renderSyntakHighlight(extract_css_3)}
      </div>
    );
  }
}
