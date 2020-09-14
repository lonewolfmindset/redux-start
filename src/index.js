import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch({
  type: "apiRequest",
  payload: {
    url: "/bugs",
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});
