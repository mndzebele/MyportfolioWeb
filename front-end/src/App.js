import Layout from "./component/layout/Layout"
import About from "./pages/aboutpages/about"
import Contact from "./pages/contactpage/contact";
import Education from "./pages/education/education"
import Techstack from "./pages/techstackpage/techstack"
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
      <>
      <Layout/>
      <div className="container">
      <About/> 
      <Education/> 
      <Techstack/>
      <Contact/>
      </div>
      <div className="footer ms-3 mb-3">
        <h6 className="text-center">Made by Snethemba &copy;2023</h6>
      </div>
      <ScrollToTop color="white"smooth style={{backgroundColor:"#138781",borderRadius:"80px",}} />
      </>
  );
}

export default App;
