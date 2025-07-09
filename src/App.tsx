import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindUser from "./routes/FindUser";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="find" element={<FindUser />} />
      </Routes>
    </BrowserRouter>
  );
}


