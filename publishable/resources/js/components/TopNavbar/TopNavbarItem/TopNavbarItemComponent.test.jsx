import React from 'react';
import { mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';
import TopNavbarItemComponent from './TopNavbarItemComponent';

const isActive = (match) => match !== null;

describe('TopNavbarItemComponent', () => {
  test('Link attivo', () => {
    const node = mount(
      <MemoryRouter initialEntries={['/miapagina']}>
        <TopNavbarItemComponent
          title="Mia Pagina"
          to="/miapagina"
          isActive={isActive}
          exact
        />
      </MemoryRouter>,
    );

    expect(node.find('a').hasClass('active')).toBeTruthy();
  });

  test('Link non attivo', () => {
    const node = mount(
      <MemoryRouter initialEntries={['/']}>
        <TopNavbarItemComponent
          title="Mia Pagina"
          to="/miapagina"
          isActive={isActive}
          exact
        />
      </MemoryRouter>,
    );

    expect(node.find('a').hasClass('active')).toBeFalsy();
  });

  test('Link esatto parziale', () => {
    const node = mount(
      <MemoryRouter initialEntries={['/miapagina/elemento']}>
        <TopNavbarItemComponent
          title="Mia Pagina"
          to="/miapagina"
          isActive={isActive}
          exact
        />
      </MemoryRouter>,
    );

    expect(node.find('a').hasClass('active')).toBeFalsy();
  });

  test('Link non esatto parziale', () => {
    const node = mount(
      <MemoryRouter initialEntries={['/miapagina/elemento']}>
        <TopNavbarItemComponent
          title="Mia Pagina"
          to="/miapagina"
          isActive={isActive}
          exact={false}
        />
      </MemoryRouter>,
    );

    expect(node.find('a').hasClass('active')).toBeTruthy();
  });
});
