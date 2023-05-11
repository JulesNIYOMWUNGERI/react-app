import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from "../components/Form";
import store from '../redux/store';

export default {
    title: 'Form',
    component: Form,
}

export const AuthForm = () => (
    <Provider store={store}>
        <Router>
         <Form />
       </Router>
    </Provider>
)

AuthForm.storyName = 'form'