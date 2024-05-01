import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { CreateCampaign, Home, CampaignDetails, Profile } from "./pages";
import Sidebar from "./components/Sidebar";
import NavigationBar from "./components/NavigationBar";
const App = () => {
  const [color, setcolor] = useState(false);

  return (
    <div
      className={`relative sm:-8 p-4 ${
        color ? "bg-[#38a38e]" : "bg-[#011C27]"
      } min-h-screen flex flex-row border-black`}
    >
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar
          handle_click={() => {
            setcolor(!color);
          }}
        />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1200px] mx-auto sm:pr-5">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/CreateCampaign" element={<CreateCampaign />} />
          <Route path="/CampaignDetails/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
