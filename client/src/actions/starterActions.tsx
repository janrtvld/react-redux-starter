import { Greeter } from "../api/StarterApi";

export const getGreetings = () => async (dispatch: any) => {
  const resp = await Greeter();

  dispatch({
    type: "SET_GREETINGS",
    payload: {
      greetings: resp.data,
    },
  });
};
