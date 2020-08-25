import React from 'react';
import {render} from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom'
import home from './pages/home';
import about from './pages/about';
import donate from './pages/donate';
import mission from './pages/mission';
import testimonials from './pages/testimonials';
// import scholarship from './pages/scholarship';
import volunteer from './pages/volunteer';
import board from './pages/board';
import calendar from './pages/calendar';
import pageNotFound from './pages/pageNotFound';
import pleasePrint from './pages/pleasePrint';
import newMemberList from './pages/newMembers';
import Member from './components/Member';

render ((
    <HashRouter basename="/">
        <Switch>
            <Route exact path="/" component={home} />
            <Route path="/about" component={about} />
            <Route path="/donate" component={donate} />
            <Route path="/mission" component={mission} />
            {/* <Route path="/scholarship" component={scholarship} /> */}
            <Route path="/testimonials" component={testimonials} />
            <Route path="/volunteer" component={volunteer} />
            <Route path="/board" component={board} />
            <Route path="/member/:type" render={({match}) => <Member type={match.params.type}/>} />
            <Route path="/calendar" component={calendar} />
            <Route path="/pleasePrint" component={pleasePrint} />
            <Route path="/signUps" component={newMemberList} />
            <Route component={pageNotFound} />
        </Switch>
    </HashRouter>
),document.getElementById("root"));
