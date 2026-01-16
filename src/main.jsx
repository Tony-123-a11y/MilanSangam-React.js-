import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryCLient= new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryCLient}>
        <AuthProvider>
          <App />
        </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
  </>
);
