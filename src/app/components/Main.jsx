import React from 'react';
import { Provider } from 'react-redux';
import { store } from  '../store/store';
import { ConnectedDashboard } from './DashBoard';
import { Router, Route} from 'react-router-dom';
import { history } from '../store/history';
import { ConnnectedNavigation } from './Navigation';

export const Main = () => (
    <Router history={history}>
        <Provider store ={store}>
            <div>
                <ConnnectedNavigation />
                <Route
                    exact
                    path="/dashboard"
                    render= { () => (<ConnectedDashboard />)}
                />
            </div>
        </Provider>
    </Router>
);