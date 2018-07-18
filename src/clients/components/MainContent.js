import React, {Component} from 'react';
import {Collapse} from 'antd';
import Concept from './Concept';
import EntryPoint from './EntryPoint';

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
            <p>Output is ...</p>
          </Panel>
          <Panel header="Mode" key="4">
            <p>Mode is ...</p>
          </Panel>
          <Panel header="Loaders" key="5">
            <p>Loaders is ...</p>
          </Panel>
          <Panel header="Plugins" key="6">
            <p>Plugins is ...</p>
          </Panel>
          <Panel header="DevServer" key="7">
            <p>DevServer is ...</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}