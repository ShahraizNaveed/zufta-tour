import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Destinations from './Components/Shared/Destinations/Destinations';
import Blogs from './Components/Pages/Blogs/Blogs';
import About from './Components/Pages/AboutPage/About';
import Contact from './Components/Pages/ContactUs/Contact';
import BookNow from './Components/Pages/BookNow/BookNow';
import PlanMyTrip from './Components/Pages/PlanMyTrip/PlanMyTrip'
import HomePage from './Components/Pages/Home/HomePage';
import Footer from './Components/Shared/Footer/Footer';
import Packages from './Components/Pages/Packages/Packages';
import PackageDetail from './Components/Pages/Packages/PackageDetail/PackageDetail';
import { useState } from 'react';
import Blog3 from './Components/Pages/Blogs/Blog3/Blog3';
import Blog2 from './Components/Pages/Blogs/Blog2/Blog2';
import ScrollToTop from './Components/Shared/ScrollToTop/ScrollToTop';
import TourDetail from './Components/Pages/Packages/TourDetail/TourDetail';

function App() {
  // const [loader, setLoader] = useState(true);
  // const preloader = document.getElementById('preloader');
  // if (preloader) {
  //   setTimeout(() => {
  //     preloader.style.display = "none";
  //     setLoader(false)
  //   }, 2000)
  // }

  
  return (
    // !loader && (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/All-packages' element={<Packages />} />
            <Route exact path='/packages' element={<PackageDetail />} />
            <Route exact path='/tour-detail' element={<TourDetail />} />
            <Route exact path="/destinations" element={<Destinations />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path='/blog2' element={<Blog2 />} />
            <Route exact path='/blog3' element={<Blog3 />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/book' element={<BookNow />} />
            <Route exact path='/plan-my-trip' element={<PlanMyTrip />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </div>
      </Router>
    // )

  );
}

export default App;
