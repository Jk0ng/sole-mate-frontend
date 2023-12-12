import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ShoeNew from "./ShoeNew"
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers"

describe("<ShoeNew />", () => {
    const renderNew = () => {
        render(
            <BrowserRouter>
                <ShoeNew />
            </BrowserRouter>
        )
    }
    it("renders without crashing", () => {
        renderNew()
    })
    it("renders a new shoe form", () => {
        renderNew()
        screen.logTestingPlaygroundURL()
        const nameInput = screen.getByRole('textbox', {
            name: /name/i,
        })
        // const ageInput = screen.getByRole('textbox', {
        //     name: /age/ ,
        // })
        const enjoysInput = screen.getByRole('textbox', {
            name: /enjoys/i,
        })
        const imageInput = screen.getByRole('textbox', {
            name: /image/i,
        })
        expect(nameInput).toBeInTheDocument()
        // expect(ageInput).toBeInTheDocument()
        expect(enjoysInput).toBeInTheDocument()
        expect(imageInput).toBeInTheDocument()
    })
    it("has a form with entries for name, age, enjoys, and image",()=>{
        renderNew()
        const formName = screen.getByText(/name/i)
        // const formAge = screen.getByText("age")
        const formEnjoys = screen.getByText(/enjoys/i)
        const formImage = screen.getByText(/image/i)
        expect(formName.getAttribute("for")).toEqual("name")
        // expect(formAge.getAttribute("for")).toEqual("age")
        expect(formEnjoys.getAttribute("for")).toEqual("enjoys")
        expect(formImage.getAttribute("for")).toEqual("image")
    })


})


// describe("<ShoeNew />", () => {
//     it("renders without crashing", () => {
//         render(
//             <BrowserRouter>
//                 <ShoeNew />
//             </BrowserRouter>
//         )
//     })
// })