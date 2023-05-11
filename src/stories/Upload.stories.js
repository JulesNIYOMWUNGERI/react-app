import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Upload from '../components/Upload';
import store from '../redux/store';

export default {
    title: 'Upload',
    component: Upload,
}

export const UploadForm = () => (
    <Provider store={store}>
        <Router>
         <Upload />
       </Router>
    </Provider>
)

UploadForm.storyName = 'upload'