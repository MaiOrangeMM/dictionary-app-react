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
        <img src={logo} width="50" height="50" />
      </div>
      <div className="container p-5">
        <Dictionary />
      </div>
    </section>
  );
}

export default App;
