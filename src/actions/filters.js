import { ADD_LOCATION_FILTER, REMOVE_LOCATION_FILTER } from "./actionTypes";

export const addLocationFilter = data => {
  return {
    type: ADD_LOCATION_FILTER,
    data
  }
};

export const removeLocationFilter = data => {
  return {
    type: REMOVE_LOCATION_FILTER,
    data
  }
};