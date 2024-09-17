import React from "react";
import HomeSection from "../Page/HomeSection";
import ContactUS from "../Page/ContactUS";
import Sidebar from "../Component/Sidebar";

const MainRoute = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-0 md:ml-64 pl-1">
        <div id="home"> {/* Add the id for smooth scrolling */}
          <HomeSection />
        </div>
        <div id="contact"> {/* Add the id for smooth scrolling */}
          <ContactUS />
        </div>
      </div>
    </div>
  );
};

export default MainRoute;
