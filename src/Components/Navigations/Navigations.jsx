import { Route, Routes } from "react-router-dom";
import FooterComponent from "../Footer/FooterComponent";
import Home from "../Home/Home";
import NavbarComponent from "../Navbar/NavbarComponent";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import About from "./../About/About";
import Blogs from "./../Blogs/Blogs";
import Contact from "./../Contact/Contact";
import Projects from "./../Projects/Projects";
import Landing from "../Landing/Landing";

const Navigations = () => {
  return (
    <div className="nav-container min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col transition-colors">
      <div className="nav-content flex-1 mb-8">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Navigations;
