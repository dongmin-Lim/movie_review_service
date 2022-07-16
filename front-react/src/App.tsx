import React from "react";
import "./App.css";
import Main1 from "./main/Main1";
import Main2 from "./main/Main2";
import Main3 from "./main/Main3";
import Nav from "./components/Nav";
import MovieList from "./main/MovieList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Main1 />
      <Main2 />
      <Main3 />
      <MovieList />
    </div>
  );
};

export default App;
