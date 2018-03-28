'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../dashboard/index';
import CreateAppStore from '../../lib/store';

const store = CreateAppStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
    });

    store.dispatch({ type: null });
  }

  render() {
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}

export default App;