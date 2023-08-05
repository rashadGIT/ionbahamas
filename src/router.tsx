import React from 'react';
import {render} from 'react-dom';
import { 
    Route,
    Switch,
    HashRouter 
} from 'react-router-dom'
import App from './App';
import Board from './pages/board';
import home from './pages/home';
import About from './pages/about';

render ((
    <HashRouter basename="/">
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={home} />
            <Route path="/board" component={Board} />
            <Route path="/about" component={About} />
        </Switch>
    </HashRouter>
),document.getElementById("root"));
