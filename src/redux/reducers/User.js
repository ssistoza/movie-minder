import { SIGN_IN, SIGNED_IN, SIGN_OUT, SIGNED_OUT } from '../actions/User';

const INITIAL_STATE = false;

export const authenticated = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return true;
    case SIGNED_OUT:
      return false;
    case SIGN_IN:
    case SIGN_OUT:
    default:
      return state;
  }
};
