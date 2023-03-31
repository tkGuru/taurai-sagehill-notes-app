import Login, { } from "../Login";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//import configureStore from "redux-mock-store"
//import { Provider } from 'react-redux';

//const onSubmit = jest.fn();

describe("Test the Login Component", () => {
  test("render the login form submit button on the screen", async () => {
    //const initialState = { state: [] };
    //const mockStore = configureStore();
    //const store = mockStore(initialState);
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    console.log(<Login />)
    expect(buttonList).toHaveLength(1);
  });

  
});
