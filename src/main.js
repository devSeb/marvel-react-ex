
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './views/App.js';
import Info from './views/Info.js';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import textTest from './redux/reducers/textTest'
import reducer_marvelCharacters from './redux/reducers/reducer_marvelCharacters'

const rootReducer = combineReducers({
    textTest, reducer_marvelCharacters
});
let store = createStore(rootReducer);



require('./main.scss');

render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/character/:idCharacter" component={Info}/>
    </Router>
    </Provider>
), document.getElementById('content'));