import React from 'react';
import {render} from 'react-dom';
import { 
    Route,
    Switch,
    HashRouter 
} from 'react-router-dom'
import Welcome from './pages/welcome';
import Board from './pages/board';
import home from './pages/home';
import About from './pages/about';
import Scholarship from './pages/scholarship';

render ((
    <HashRouter basename="/">
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={home} />
            <Route path="/board" component={Board} />
            <Route path="/about" component={About} />
            <Route path="/scholarship" component={Scholarship} />
        </Switch>
    </HashRouter>
),document.getElementById("root"));
