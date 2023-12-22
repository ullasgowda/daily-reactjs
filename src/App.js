import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import Todo from "./Apps/Todo/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="app">
          <Route path="todo" element={<Todo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
