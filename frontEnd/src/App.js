import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Flavors } from "./components/Flavors";
import { FlavorsCategory } from "./components/flavorCategoryFiles/FlavorsCategory";
import { Navigation } from "./components/navbarFiles/Navigation";
import { Footer } from "./components/footerFiles/Footer";
import { useState } from "react";

function App() {

  const [status, setStatus] = useState(false);

  return (
    <div className={status ? "setMobileMenu" : " "}>
      <BrowserRouter>
        <Navigation status={status} setStatus={setStatus}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="categories" element={<FlavorsCategory />} />
                <Route path="flavors/:category" element={<Flavors />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
