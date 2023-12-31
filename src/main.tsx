import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/state/api";

export const store = configureStore({
  reducer: {
    //Add the generated reducer as a specific top-level slice
    [api.reducerPath]: api.reducer, //set up our api reducer path (our redux toolkit query api slice)
  },
  middleware: (getDefault) => getDefault().concat(api.middleware), //manage cache lifetimes and subscriptions
});

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
