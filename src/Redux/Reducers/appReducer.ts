import { ActionInterface } from "../../Interfaces";
import { UPDATE_APP_STATE } from "../Types";

/* App State Reducer */
const appReducer = (
  state: any = {
    loggedInStatus: 0,
    userData: null,
    purchaseState: true,
    appLoading: false
  },
  action: ActionInterface
) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const { name, value } = action.payload;
      const newState = { ...state, [name]: value };
      return newState;
    }
    default:
      return state;
  }
};

export default appReducer;
