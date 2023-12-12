import { render, screen } from '@testing-library/react';
import ShoeShow from './ShoeShow'
import { BrowserRouter } from 'react-router-dom';
import mockShoes from '../mockShoes';

describe("<ShoeShow />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <ShoeShow />
            </BrowserRouter>
        )
    })
})
