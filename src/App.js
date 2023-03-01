import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/pages/aboutus/About";
import Canvas from "./components/pages/canvasprinting/Canvas";
import GoodJobP from "./components/pages/goodjob/GoodJobPage";
import Order from "./components/pages/orderdetail/Order";
import RetryPage from "./components/pages/retry/RetryPage";
import Start from "./components/pages/startcreating/Start";


function App() {
  return <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/mvp" element={ <Home /> } />
        <Route path="startcreating" element={ <Start /> } />
        <Route path="aboutus" element={ <About /> } />
        <Route path="retry" element={ <RetryPage /> } />
        <Route path="goodjob" element={ <GoodJobP /> } />
        <Route path="canvasprinting" element={ <Canvas /> } />
        <Route path="order" element={ <Order /> } />
    </Routes> 
    </div>
    </BrowserRouter>;
}

export default App;
