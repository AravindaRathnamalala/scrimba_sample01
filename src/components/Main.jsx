import { React } from "react";

const Main = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun Facts About React</h1>
      <ul className="main--facts"> 
        <li>Was first released in 2013</li>
        <li>Was originally created by Walker</li>
        <li>Has overall 100000+ stars in GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>
          Powers thousands of enterprise applications, including mobile apps
        </li>
      </ul>
    </main>
  );
};

export default Main;
