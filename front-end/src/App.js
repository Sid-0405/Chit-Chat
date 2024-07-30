import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import NotFound from "./pages/notFound"; // Import the NotFound component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
}

export default App;
