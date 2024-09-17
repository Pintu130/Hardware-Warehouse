import React from "react";
import HomeSection from "../Page/HomeSection";
import ContactUS from "../Page/ContactUS";
import Sidebar from "../Component/Sidebar";
import ScrollTop from "../Common/ScrollTop";
import Products from "../Page/Products";
import About from "../Page/About";

const MainRoute = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-0 md:ml-64">
        <div id="home"> {/* Add the id for smooth scrolling */}
          <HomeSection />
        </div>
        <div id="contact"> {/* Add the id for smooth scrolling */}
          <ContactUS />
        </div>
        <div id="products"> {/* Add the id for smooth scrolling */}
          <Products />
        </div>
        <div id="about"> {/* Add the id for smooth scrolling */}
          <About />
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default MainRoute;
