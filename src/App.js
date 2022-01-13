import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Login from "./components/Login";

import "./styles.css";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
