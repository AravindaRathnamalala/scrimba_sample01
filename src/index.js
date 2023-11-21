import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.svg";

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

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={logo} />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer-scrim">
      <p> All right resevred &copy; 2023</p>
    </footer>
  );
};

const MainComponent = () => {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  );
};
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
