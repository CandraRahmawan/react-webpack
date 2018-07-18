import React, {Component} from 'react';
import {Collapse} from 'antd';

const Panel = Collapse.Panel;

export default class Contents extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Collapse accordion>
          <Panel header="Concept" key="1">
            <p>Concept is ...</p>
          </Panel>
          <Panel header="Entry Point" key="2">
            <p>Entry Point is ...</p>
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