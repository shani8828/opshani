import Benefits from "./components/Events";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/events" element={<Benefits />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
