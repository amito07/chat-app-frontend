import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Navbar from "./Components/Navbar";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/chats" element={<Chat />} />
          {/* <PrivateRoute path="/admin" component={Admin} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
