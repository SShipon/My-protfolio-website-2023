import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";

function App() {
  return (
    <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
            <Route path="blog" element={<Blogs></Blogs>}></Route>
          </Routes>
           <Footer></Footer> 
    </div>
  );
}

export default App;
