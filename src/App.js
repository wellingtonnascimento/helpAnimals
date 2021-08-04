import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Home from "./Components/Home";
import Login from "./Components/Login";
import User from "./Components/User";
import { UserStorage } from "./Contexts/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
