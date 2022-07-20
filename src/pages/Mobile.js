import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatList from "../components/mobile/ChatList";
import Home from "./Home";

const Mobile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mobile;
