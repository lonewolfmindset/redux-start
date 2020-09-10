import reducer from "./reducer";

function createStore(reducer) {
  let state;

  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action);
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
  };
}

export default createStore(reducer);
