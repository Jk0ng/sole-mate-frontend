import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import userEvent from "@testing-library/user-event"
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })  
  
  it("actually renders the test 'header'", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const headerElement = screen.getByText(/header/i)
    expect(headerElement).toBeInTheDocument()
  })
  it('ensures the links work', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const homeLink = screen.getAllByRole('link')
    expect(homeLink.length).toEqual(3)
  })
})
