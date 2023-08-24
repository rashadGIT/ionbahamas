import {render} from 'react-dom';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom'
import Welcome from './pages/welcome';
import Board from './pages/board';
import Home from './pages/home';
import About from './pages/about';
import Scholarship from './pages/scholarship';
import Donate from './pages/donate';

render ((
    <Router basename="/">
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/about" element={<About />} />
            <Route path="/scholarship" element={<Scholarship/>} />
            <Route path="/donate" element={<Donate />} />
        </Routes>
    </Router>
),document.getElementById("root"));
