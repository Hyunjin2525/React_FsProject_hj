import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Footer from "./layout/Footer";
import List from "./shop/List";
import Detail from "./shop/Detail";
import News from "./news/News";

function App() {
  return (
   <Router>
     <Header/>
     <div id={"root"}>
       <Routes>
         <Route exact path={"/"} element={<Home/>}/>
         <Route path={"/shop/list"} element={<List/>}/>
         <Route path={"/shop/detail/:gno"} element={<Detail/>}/>
         <Route path={"/news/news"} element={<News/>}/>
       </Routes>

     </div>
    <Footer/>
   </Router>
  );
}

export default App;
