import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Table from './Table';

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

it('renders user data', async () => {
  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const data = _.orderBy(cloneData, sortField, sort);

    this.setState({ data, sort, sortField });
  };

  const displayData = {
    id: 12,
    firstname: 'ivan',
    lastname: 'ivanov',
    email: 'ivan@mail.ru',
    phone: '12345678',
    street: 'lenina',
    city: 'moskov',
    state: 'usa',
    zip: '223',
  };
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  // Используем act асинхронно, чтобы передать успешно завершённые промисы
  await act(async () => {
    render(<Table data={displayData} onSort={this.onSort} />, container);
  });

  expect(container.querySelector('td').textContent).toBe(displayData.name);

  // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
  global.fetch.mockRestore();
});
