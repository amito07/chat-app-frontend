import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Navbar from "./Components/Navbar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/chats" element={<Chat />} />
            {/* <PrivateRoute path="/admin" component={Admin} /> */}
          </Routes>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
