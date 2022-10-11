import FollowersList from "../Followers";
import { screen, render, waitFor, fireEvent, } from "@testing-library/react";
import axiosMock from 'axios';
jest.mock('axios')
jest.setTimeout(30000);
describe("testing the followers component",()=>{
    

    test("testing the loading message",()=>{
        render(<FollowersList/>);
        // await new Promise ((r)=>setTimeout(r,3000));
         const loadingmsg = screen.queryByTestId("followerslist");
       // const text = screen.getByText("FollowersList");
        expect(loadingmsg).toBeInTheDocument();
        
    })
  
  
})