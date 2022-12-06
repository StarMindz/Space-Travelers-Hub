import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import MissionsPage from '../components/pages/Missions';

describe('Missions page', () => {
  test('Show Correct render of Missions', () => {
    const missions = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MissionsPage />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(missions).toMatchSnapshot();
  });
});
