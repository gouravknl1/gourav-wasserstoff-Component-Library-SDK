import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Ticket } from "./pages/Ticket";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
