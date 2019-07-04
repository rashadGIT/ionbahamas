import React from 'react';
import {render} from 'react-dom';
import { Route, BrowserRouter, Switch, HashRouter } from 'react-router-dom'
import home from './pages/home';
import about from './pages/about';
import donate from './pages/donate';
import mission from './pages/mission';
import testimonials from './pages/testimonials';
import volunteer from './pages/volunteer';
import member from './pages/member';
import board from './pages/board';

render ((
<HashRouter basename="/">
    <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/donate" component={donate} />
        <Route path="/mission" component={mission} />
        <Route path="/testimonials" component={testimonials} />
        <Route path="/volunteer" component={volunteer} />
        <Route path="/board" component={board} />
        <Route path="/member" component={member} />
        <Route component={member} />
    </Switch>
</HashRouter>
),document.getElementById("root"));