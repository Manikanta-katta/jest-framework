import { screen,render } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("testing dashboard component",()=>{
    test("render the dasboard page with usersdata",()=>{
        render(<Dashboard/>)
        const text = screen.getByText("Usersdata");
        expect(text).toBeInTheDocument();
    });
    test("api calling",()=>{
        
    })
})