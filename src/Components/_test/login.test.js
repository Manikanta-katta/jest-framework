import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../Login";

describe("login component", () => {
  test("should be failed on email validation", () => {
    render(<Login />);
    const email = "";
    expect(email).not.toBe(true);
  });
  test("email input field should accept email", () => {
    render(<Login />);
    const email1 = screen.getByTestId("emailid");
    userEvent.type(email1, "manikantakatta50@gmail.com");
    expect(email1.value).toMatch("manikantakatta50@gmail.com");
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
    userEvent.type(emailinput, "manikantakatta50@gmail.com");
    userEvent.click(submitBtn);

    const errorpassword = screen.getByText("please enter your password");

    expect(errorpassword).toBeInTheDocument();
  });
  test("should be clear the field inputs", () => {
    render(<Login />);
    const resetBtn = screen.getByTestId("reset");
    const emailinput = screen.getByPlaceholderText("enter your email");
    //const passwordinput = screen.getByPlaceholderText("enter your password");
    userEvent.type(emailinput, "manikantakatta50@gmail.com");
    userEvent.click(resetBtn);
    expect(emailinput.value).toMatch("");
  });
});
