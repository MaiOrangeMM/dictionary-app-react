import Dictionary from "./Dictionary";
import logo from "./logo.svg";

import "./Dictionary.css";

import "@popperjs/core/dist/esm/popper";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <section className="App">
      <div className="container pt-5 px-5 d-flex justify-content-end">
        <img src={logo} width="50" height="50" alt="design-mai-logo" />
      </div>
      <div className="container p-5">
        <Dictionary defaulKeyword="time" />
      </div>
      <div className="container mt-5 py-5 d-flex justify-content-center align-items-center">
        <a
          className="footerlink mx-3"
          href="https://github.com/MayElectric/dictionary-app-react"
          target="_blank"
        >
          Github
        </a>
        <a
          className="footerlink mx-3"
          href="https://www.linkedin.com/in/mai-nguyen-79311a1b3/"
          target="_blank"
        >
          LinkIn
        </a>
      </div>
    </section>
  );
}

export default App;
