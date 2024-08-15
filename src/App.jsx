import "./App.css";
import Card from "./Pages/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
