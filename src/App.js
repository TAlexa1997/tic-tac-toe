import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LightOn from "./pages/LightOn";
import TicTacToe from "./pages/TicTacToe";
import NoPage from "./pages/NoPage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TicTacToe />} />
          <Route path="lighton" element={<LightOn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
