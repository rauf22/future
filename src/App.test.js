import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import AddRow from './AddRow/AddRow';
import { unmountComponentAtNode } from 'react-dom';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

configure({
  adapter: new Adapter(),
});

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = wrapper = shallow(<App />);
  });

  it('Should render', () => {
    expect(wrapper.find(AddRow)).toHaveLength(0);
  });
});
