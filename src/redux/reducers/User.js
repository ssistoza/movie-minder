import { SIGN_IN, SIGNED_IN, SIGN_OUT, SIGNED_OUT } from '../actions';
import { updateObject } from '../../helper';

const INITIAL_STATE = {
  user: null,
};

export const authenticated = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return updateObject(state, { user: action.data });
    case SIGNED_OUT:
      return updateObject(state, { user: null });
    case SIGN_IN:
    case SIGN_OUT:
    default:
      return state;
  }
};
