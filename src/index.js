import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// const store = createStore();

const app = (
    // <Provider store={store}>
        <App />
    // </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
