import { SAMPLE_ACTION } from '../actions/index';

export default function settings(state = {}, action) {
  switch (action.type) {
  case SAMPLE_ACTION:
    {
      return Object.assign({}, state, {
        payload: action.payload
      });
    }
  default:
    return Object.assign({}, state);
  }
}
