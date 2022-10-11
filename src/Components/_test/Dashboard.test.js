import { screen, render, findByTestId, waitFor, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Dashboard from "../Dashboard";
jest.setTimeout(20000);

describe("testing dashboard component", () => {
    
    // test('some test title',async () =>{
    //     render(<Dashboard/>)
    //     const foo = true;
    //     await new Promise((r) => setTimeout(r,20000));
    //     expect(foo).toBeDefined();
    // });
    // beforeEach(() => {
    //     jest.setTimeout(30000);
    //   });
    test("render the dasboard page with usersdata", async () => {
        render(<Dashboard />)

        const text = screen.getByText("Loading.....");
        expect(text).toBeInTheDocument();
    });
    test("api calling", async () => {
        render(<Dashboard />)
        await new Promise((r) => setTimeout(r, 10000));
        const apibtn = screen.getByText("Hide Usersdata");
        expect(apibtn).toBeInTheDocument();
    });
    test("todos list", async () => {
        // axios.get.mockResolvedValue({data:})
        // render(<Dashboard/>)
        // const todoList = await waitFor(()=>screen.findAllByTestId("ptag"));
        // expect(todoList).toHaveLength(30);
    });
    test("users list  should be there", async () => {
        render(<Dashboard />)
        await new Promise((r) => setTimeout(r, 5000));
        const username = screen.getAllByTestId("user");
        expect(username).toHaveLength(30);
    });
    test("followers buttons the data should be there", async () => {
        render(<Dashboard />)
        await new Promise((r) => setTimeout(r, 5000));
        const renderdata = screen.getAllByText("Followers")
        expect(renderdata).toHaveLength(30);
    });
    test("followers buttons the data should be there", async () => {
        render(<Dashboard />)
        await new Promise((r) => setTimeout(r, 5000));
        const renderdata = screen.getAllByText("Following")
        expect(renderdata).toHaveLength(30);
    });
    test("all the images should be there",async ()=>{
        render(<Dashboard />)
        await new Promise((r) =>setTimeout(r,3000));
        const renderimg = screen.getAllByRole("img");
        expect(renderimg).toHaveLength(30);
    });
    test("username should be display",async  ()=>{
        render(<Dashboard/>)
        await new Promise((r)=>setTimeout(r,2000));
        const username = screen.getByText("mojombo");
        expect(username).toBeInTheDocument();
    })
    test("hidding should be there when clicking on hide data",async()=>{
        render(<Dashboard/>)
        await new Promise((r)=>setTimeout(r,5000));
        const apibtn = screen.getByText("Hide Usersdata");
        const renderimg = screen.getAllByRole("img");
       fireEvent.click(apibtn);
        expect(renderimg).not.toBe(true);
    });
    test("Username text should be display",async() =>{
        render(<Dashboard/>)
        await new Promise((r)=>setTimeout(r,4000));
         const username = screen.getByTestId("username");
         expect(username).toBeInTheDocument();
    })

})