import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Switch, Redirect, Route, IndexRoute } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'


import './styles/index.css';
import Home from './components/Home';
import rootReducer from './reducers/rootReducer'
import registerServiceWorker from './registerServiceWorker';




const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware(thunk))
  )
);



const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/app' component={Home}/>
        <Redirect to='/app' />
      </Switch>
    </BrowserRouter>
  </Provider>
)




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
