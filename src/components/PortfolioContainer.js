import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import "../index.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="project-container" style={{ height: "100vh" }}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
