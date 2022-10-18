import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App, { About } from './App';
import renderWithRouter from './renderWithRouter';


describe('teste da aplicação toda', () => {
it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
})

it('deve testar um caminho não existente e a renderização do Not Found', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/google.com/');
  })

  const notFoundTitle = screen.getByRole('heading',
    { name: 'Página não encontrada' });
  expect(notFoundTitle).toBeInTheDocument();
});

it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});
})

