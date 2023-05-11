import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../redux/store';

export default {
    title: 'Navbar',
    component: Navbar,
}

export const NavBar = () => (
    <Provider store={store}>
        <Router>
         <Navbar />
       </Router>
    </Provider>
)

Navbar.storyName = 'Navbar'