import React, {Component} from 'react';
import {Collapse} from 'antd';
import Concept from './concept';
import EntryPoint from './entry-point';
import Output from './output';
import Mode from './mode';
import Loaders from './loaders';
import Plugins from './plugins';

const Panel = Collapse.Panel;

export default class MainContent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Collapse accordion>
          <Panel header="Concept" key="1">
            <Concept/>
          </Panel>
          <Panel header="Entry Point" key="2">
            <EntryPoint/>
          </Panel>
          <Panel header="Output" key="3">
            <Output/>
          </Panel>
          <Panel header="Mode" key="4">
            <Mode/>
          </Panel>
          <Panel header="Loaders" key="5">
            <Loaders/>
          </Panel>
          <Panel header="Plugins" key="6">
            <Plugins/>
          </Panel>
          <Panel header="DevServer" key="7">
            <p>DevServer is ...</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}