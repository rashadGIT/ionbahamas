import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from 'react-router-dom'
import home from './pages/home';
import about from './pages/about';
import donations from './pages/donations';
import howTo from './pages/howTo';
import donate from './pages/donate'
import mission from './pages/mission';
import testimonials from './pages/testimonials';
import volunteer from './pages/volunteer';
import board from './pages/board';
import calendar from './pages/calendar';
import pageNotFound from './pages/pageNotFound';
import pleasePrint from './pages/pleasePrint';
import newMemberList from './pages/newMembers';
import member from './pages/member';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { PaymentReducers } from './components/Payment/payment-reducer'
import Layout from './components/Layout'

let store = createStore(PaymentReducers)

ReactDOM.render(
    <HashRouter basename="/">
        <Provider store={store}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={home} />
                    <Route path="/about" component={about} />
                    <Route path="/mission" component={mission} />
                    <Route path="/testimonials" component={testimonials} />
                    <Route path="/volunteer" component={volunteer} />
                    <Route path="/board" component={board} />
                    <Route path="/member/:type" component={member} />
                    <Route path="/calendar" component={calendar} />
                    <Route path="/pleasePrint" component={pleasePrint} />
                    <Route path="/signUps" component={newMemberList} />
                    <Route path="/donate/:type" component={donate} />
                    <Route path="/donations" component={donations} />
                    <Route path="/howTo" component={howTo} />
                    <Route component={pageNotFound} />
                </Switch>
            </Layout>
        </Provider>
    </HashRouter>, 
document.getElementById('root'));
