import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/pages/aboutus/About";
import Start from "./components/pages/startcreating/Start";


function App() {
  return <BrowserRouter>
    <div className="App">
    <Routes>
         
        <Route path="/mvp" element={ <Home /> } />
        <Route path="startcreating" element={ <Start /> } />
        <Route path="aboutus" element={ <About /> } />
        {/* <Route path="signup" element={ <SignUpModel /> } /> */}
    </Routes> 
    </div>
    </BrowserRouter>;
}

export default App;
