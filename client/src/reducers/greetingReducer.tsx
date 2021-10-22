interface GreetingState {
  greetings: string;
}
const initState: GreetingState = {
  greetings: "",
};

const greetingReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "SET_GREETINGS":
      return {
        ...state,
        greetings: action.payload.greetings,
      };
    default:
      return { ...state };
  }
};

export default greetingReducer;
