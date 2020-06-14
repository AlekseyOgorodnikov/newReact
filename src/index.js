import * as serviceWorker from './serviceWorker';
import store from './Redux/State'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export function callSubscriber(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 dispatchMessage={store.dispatchMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

callSubscriber(store.getState());
store.subscribe(callSubscriber);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
