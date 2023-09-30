import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Flavors } from "./components/Flavors";
import { FlavorsCategory } from "./components/FlavorsCategory";
import { Navigation } from "./components/navbarFiles/Navigation";
import { Error404 } from "./components/Error404";
import { Footer } from "./components/footerFiles/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="flavorsCategory" element={<FlavorsCategory />} />
                <Route path="flavors/:category" element={<Flavors />} />
                <Route path="*" element={<Error404 />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
