import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Resume from "./components/Pages/Resume/Resume";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";
import Certificates from "./components/Pages/Certificate/Certificates";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";

function App() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Layout />}>
              <Route exact path="/" element={<About />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/projects" element={<Portfolio />} />
              <Route exact path="/certificate" element={<Certificates />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
