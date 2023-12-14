import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"
import Header from "../components/Header";

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
  it("renders a logo with a src and alt", () => {
        render(
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute ("src", "shoe-logo.jpg")
        expect(logo).toHaveAttribute ("alt", "Shoe logo")
        expect(logo).toHaveClass ("shoe-logo")
      })
})