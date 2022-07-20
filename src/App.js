import { isMobile } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ChatList from "./components/mobile/ChatList";
import DeviceDetector from "./helpers/DeviceDetector";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ isMobile ? <ChatList /> : <Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
