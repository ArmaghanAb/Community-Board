import React from "react";
import CommunityBoard from "./components/CommunityBoard";
import "./App.css"

function App() {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <img src="https://th.bing.com/th/id/OIP.4WkFOKOR1efDtyT06WlbcAHaDd?w=334&h=163&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Community Banner" />
      </div>

      {/* Heading */}
      <h1 className="header">Mental Health & Wellness</h1>

      {/* Community Board */}
      <CommunityBoard />
    </div>
  );
}

export default App;
