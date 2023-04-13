import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Navpane from "./Components/Navpane";
import Monday from "./pages/Shop/Monday";
import Tuesday from "./pages/Shop/Tuesday";
import Wednesday from "./pages/Shop/Wednesday";
import Thursday from "./pages/Shop/Thursday";
import Friday from "./pages/Shop/Friday";
import { ShopContextProvider } from "./context/Shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navpane />
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/contact" element={<Admin />} /> */}
            <Route path="/monday" element={<Monday />} />
            <Route path="/tuesday" element={<Tuesday />} />
            <Route path="/wednesday" element={<Wednesday />} />
            <Route path="/thursday" element={<Thursday />} />
            <Route path="/friday" element={<Friday />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
