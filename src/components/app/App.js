
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "../header/Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Footer from "../footer/Footer";
import Warhammer from "../../pages/warhammer";
import PersonalArea from "../../pages/PersonalArea";
import Blog from "../../pages/Blog";

import './app.css'
import '../basicStyles/basicStyles.css'

const App = () =>{

    return(
        <Router>
            <div className="app">
                <Header/>
                <main className="main">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/about"  element={<About/>}/>
                        <Route path="/warhammer"  element={<Warhammer/>}/>
                        <Route path="/personalArea"  element={<PersonalArea/>}/>
                        <Route path="/blog"  element={<Blog/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;