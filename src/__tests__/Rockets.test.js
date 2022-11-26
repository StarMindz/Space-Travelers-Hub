import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../components/pages/Rockets';

describe('Rockets page', () => {
  test('Show Correct render of Rockets', () => {
    const rockets = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rockets />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
