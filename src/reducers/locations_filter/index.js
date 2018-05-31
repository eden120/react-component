import { ADD_LOCATION_FILTER, REMOVE_LOCATION_FILTER } from "../../actions/actionTypes";

export default function user(state = [], action = {}) {
  switch (action.type) {
    case ADD_LOCATION_FILTER:
      return [...state, action.data];
    case REMOVE_LOCATION_FILTER:
      return [
        ...state.slice(0, action.data),
        ...state.slice(action.data + 1)
      ]
    default:
      return state;
  }
}