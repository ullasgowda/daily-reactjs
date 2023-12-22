import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import Todo from "./Apps/Todo/Todo";
import BinaryDecimalConverter from "./Apps/BinaryDecimalConverter/BinaryDecimalConverter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="app">
          <Route path="todo" element={<Todo />}></Route>
          <Route
            path="binarydecimal"
            element={<BinaryDecimalConverter />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
