import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer1 from "./components/Footer1";
function App() {
  return <Router> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <Footer1/>
  </Router>
}

export default App;
