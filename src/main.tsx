import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import "./index.css";
import DataProvider, { DataContext } from "./providers/DataProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Layout>
          <App />
        </Layout>
      </DataProvider>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
