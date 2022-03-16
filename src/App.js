import "./App.css";
import logo from './logo.svg';
import MoviesList from "./MovieList/MoviesList";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail/MovieDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MoviesList />} />
        <Route exact path="/movie-details" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
