import { render, screen } from '@testing-library/react';
import ShoeIndex from './ShoeIndex';
import { BrowserRouter } from 'react-router-dom';
import mockShoes from '../mockShoes';

describe("<ShoeIndex />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <ShoeIndex/>
            </BrowserRouter>
        )
    })

    it("renders all shoes", () => {
        render(
            <BrowserRouter>
                <ShoeIndex shoes={mockShoes} />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const shoePicture = screen.getAllByRole('img')
        expect(shoePicture.length).toEqual(3)
    })
})
