import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ShoeEdit from "./ShoeEdit";
import mockShoes from "../mockShoes";

describe("<ShoeEdit />", () => {
  const renderNew = () => {
    render(
      <MemoryRouter initialEntries={["/shoeedit/1"]}>
        <Routes>
          <Route
            path="/shoeedit/:id"
            element={<ShoeEdit shoes={mockShoes} />}
          />
        </Routes>
      </MemoryRouter>
    );
  };

  it("renders without crashing", () => {
    renderNew();
  });

  it("renders a form to edit your shoe", () => {
    renderNew()
    screen.logTestingPlaygroundURL()
    const nameInput = screen.getByRole('textbox', {
        name: /name/i,
    })
    const enjoysInput = screen.getByRole('textbox', {
        name: /enjoys/i,
    })
    const imageInput = screen.getByRole('textbox', {
        name: /image/i,
    })
    expect(nameInput).toBeInTheDocument()
    expect(enjoysInput).toBeInTheDocument()
    expect(imageInput).toBeInTheDocument()
  })

  it("renders a form with what the shoe age", () => {
    renderNew()
    expect(
        screen.getByRole('textbox', {
            name: /age/i
          })
    ).toBeInTheDocument()
  })

});
