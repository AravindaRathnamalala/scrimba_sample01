import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function Page() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
