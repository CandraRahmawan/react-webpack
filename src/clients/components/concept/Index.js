import React, {Component} from 'react';

export default class Index extends Component {
  render() {
    return (
      <div>
        <div className="title-content">To get started you only need to understand its Core Concepts :</div>
        <ul>
          <li>
            <b>Entry</b>
            <p>
              An entry point indicates which module webpack should use to begin building out its internal dependency
              graph, webpack will figure out which other modules and libraries that entry point depends on (directly and
              indirectly).
            </p>
          </li>
          <li>
            <b>Output</b>
            <p>
              The output property tells webpack where to emit the bundles it creates and how to name these files, it
              defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.
            </p>
          </li>
          <li>
            <b>Loaders</b>
            <p>
              Out of the box, webpack only understands JavaScript files. Loaders allow webpack to process other types of
              files and converting them into valid modules that can be consumed by your application and added to the
              dependency graph.
            </p>
          </li>
          <li>
            <b>Plugins</b>
            <p>
              While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider
              range of tasks like bundle optimization, assets management and injection of environment variables.
            </p>
          </li>
          <li>
            <b>Mode</b>
            <p>
              By setting the mode parameter to either development, production or none, you can enable webpack's built-in
              optimizations that correspond to each environment. The default value is production.
            </p>
          </li>
          <li>
            <b>Browser Compatibility</b>
            <p>
              webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). webpack needs
              Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a
              polyfill before using these expressions.
            </p>
          </li>
        </ul>
      </div>
    )
  }
}