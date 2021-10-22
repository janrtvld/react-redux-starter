import React from "react";
import logo from "../assets/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../actions/starterActions";
import { RootState } from "../reducers";

export interface Props {}

export const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state: RootState) => state.greetings);

  const greet = () => {
    dispatch(getGreetings());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="h-48 m-4" src={logo} alt="animo-logo" />
      <p>{greetings} </p>
      <button
        onClick={greet}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
      >
        Get Started
      </button>
    </div>
  );
};
