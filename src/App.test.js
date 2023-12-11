import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it('renders learn react link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const homeElement = screen.getByRole('link', {
      name: /home/i
    })
    expect(homeElement).toBeInTheDocument()
  });
})
