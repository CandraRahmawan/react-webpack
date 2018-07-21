import MainContent from '../../clients/components/MainContent';
import { Collapse } from 'antd';
import Concept from '../../clients/components/concept';
import EntryPoint from '../../clients/components/entry-point';
import Output from '../../clients/components/output';
import Mode from '../../clients/components/mode';
import Loaders from '../../clients/components/loaders';
import Plugins from '../../clients/components/plugins';
import CodeSplitting from '../../clients/components/code-splitting';
import DevServer from '../../clients/components/dev-server';

const Panel = Collapse.Panel;

describe('<MainContent/>', () => {
  const shallowComponent = shallow(<MainContent />);
  test('Should be render Panel to have length 8', () => {
    expect(shallowComponent.find(Panel)).toHaveLength(8);
  });

  test('Should be render Concept', () => {
    expect(shallowComponent.find(Concept).exists()).toBe(true);
  });

  test('Should be render EntryPoint', () => {
    expect(shallowComponent.find(EntryPoint).exists()).toBe(true);
  });

  test('Should be render Output', () => {
    expect(shallowComponent.find(Output).exists()).toBe(true);
  });

  test('Should be render Mode', () => {
    expect(shallowComponent.find(Mode).exists()).toBe(true);
  });

  test('Should be render Plugins', () => {
    expect(shallowComponent.find(Plugins).exists()).toBe(true);
  });

  test('Should be render CodeSplitting', () => {
    expect(shallowComponent.find(CodeSplitting).exists()).toBe(true);
  });

  test('Should be render DevServer', () => {
    expect(shallowComponent.find(DevServer).exists()).toBe(true);
  });
});
