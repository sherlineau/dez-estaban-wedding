import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import OurStory from "./views/OurStory/OurStory";
import Registry from "./views/Registry/Registry";
import VenueInfo from "./views/VenueInfo/VenueInfo";
import WeddingParty from "./views/WeddingParty/WeddingParty";
import Memento from "./views/Memento/Memento";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/wedding-party" element={<WeddingParty />} />
        <Route path="/venue" element={<VenueInfo />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/memento" element={<Memento />} />
      </Routes>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
