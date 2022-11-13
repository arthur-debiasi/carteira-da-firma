import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';
import { Stack } from '@mui/material';
// import { Stack } from '@mui/system';

export default class App extends Component {
    render() {
        return (
            <Stack sx={ {
                width: 10/10,
                height: 1/1,
                margin: 'auto',
            }}>
                <Switch>
                    <Route exact path="/" component={ Login } />
                    <Route path="/carteira" component={ Wallet } />
                </Switch>
            </Stack>
        );
    }
}
