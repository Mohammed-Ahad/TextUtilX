// import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link,
//   // useRouteMatch,
//   // useParams,
// } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f1d40";
      showAlert("Dark Mode Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled!", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  function showAlert(msg, type) {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  //let match = useRouteMatch();
  return (
  //   <Router>
  //     <Navbar
  //       title="TextUtilX"
  //       about="About"
  //       mode={mode}
  //       toggleMode={toggleMode}
  //     />
  //     <Alert alert={alert} />
  //     <div className="container">
  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>

  //         <Route path="/">
  //           <TextForm
  //             heading="Enter the text to analyzed below!"
  //             mode={mode}
  //             showAlert={showAlert}
  //           />
  //         </Route>
  //       </Switch>
  //     </div>
  // </Router>

    <>
      <Navbar
        title="TextUtilX"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
            <TextForm
              heading="Enter the text to analyzed below!"
              mode={mode}
              showAlert={showAlert}
            />
      </div>
  </>
  );
}

//export default App;
