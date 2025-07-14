import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Before from "./routes/Before";
import After from "./routes/Before/After";
import HomeBody from "./routes/Home/HomeBody";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody/>}/>
          <Route path="before" element={<Before />}>
            <Route path=":userLogin" element={<After/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


