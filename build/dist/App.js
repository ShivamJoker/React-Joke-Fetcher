import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import ky from "../_snowpack/pkg/ky.js";
const url = "https://icanhazdadjoke.com/";
const App = () => {
  const [state, setState] = useState(1);
  const [joke, setJoke] = useState("");
  useEffect(async () => {
    const res = await ky.get(url).json();
    console.log(res);
    setJoke(res.joke);
  }, [state]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, joke), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setState(state + 1)
  }, "Get Joke"));
};
export default App;
