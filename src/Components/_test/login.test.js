import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../Login";

describe("login component", () => {
  test("render the login form with a buttons", async () => {
    render(<Login />);
    const buttonlist = await screen.findAllByRole("button");
    expect(buttonlist).toHaveLength(2);
  });
  test("should be failed on email validation", () => {
    const email = " ";
    expect(email).not.toBe(true);
  });
  test("email input field should accept email", () => {
    const email = screen.getByPlaceholderText("enter your email");
    userEvent.type(email, "manikanta");
    expect(email.value).toMatch("manikantakatta50@gmail.com");
  });

  test("should be show emailerror msg", () => {
     render(<Login />);
    const submitBtn = screen.getByTestId("submit");
    // const emailinput = screen.getByPlaceholderText("enter your email");
    // const passwordinput = screen.getByPlaceholderText("enter your password");
    fireEvent.click(submitBtn);
    const erroremail = screen.getByText("please enter your email");
    
    expect(erroremail).toBeInTheDocument();
    
  });
  test("should be show passworderror msg", () => {
    render(<Login />);
    const submitBtn = screen.getByTestId("submit");
    const emailinput = screen.getByPlaceholderText("enter your email");
   userEvent.type(emailinput,"manikantakatta50@gmail.com");
    userEvent.click(submitBtn);
   
    const errorpassword = screen.getByText("please enter your password");
  
    expect(errorpassword).toBeInTheDocument();
  });
  test("should be clear the field inputs",()=>{
    render(<Login/>)
    const resetBtn = screen.getByTestId("reset");
    const emailinput = screen.getByPlaceholderText("enter your email");
    //const passwordinput = screen.getByPlaceholderText("enter your password");
    userEvent.type(emailinput,"manikantakatta50@gmail.com");
    userEvent.click(resetBtn);
    expect(emailinput.value).toMatch("");
  })
});
