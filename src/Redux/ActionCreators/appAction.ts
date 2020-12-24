import { UPDATE_APP_STATE } from '../Types';

/* Function to update App state */
export const updateAppState = (name: string, value: string) => {
  return {
    type: UPDATE_APP_STATE,
    payload: {
      name,
      value
    }
  };
};
