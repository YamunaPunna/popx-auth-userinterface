import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileFrame from "./layout/MobileFrame";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


export default function App() {
  return (
    <BrowserRouter>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}
