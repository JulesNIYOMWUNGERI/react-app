import React from 'react';
import { datas } from '../components/Display';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../components/Card';
import store from '../redux/store';

export default {
    title: 'Card',
    component: Card,
}

export const singleCard = () => (
    <Provider store={store}>
        <Router>
          <Card data={datas[0]}/>
       </Router>
    </Provider>
)

singleCard.storyName = 'card'