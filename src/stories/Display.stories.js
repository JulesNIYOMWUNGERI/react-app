import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Display from '../components/Display';
import store from '../redux/store';

export default {
    title: 'Display',
    component: Display,
}

export const Displayer = () => (
    <Provider store={store}>
        <Router>
         <Display />
       </Router>
    </Provider>
)

Displayer.storyName = 'display'