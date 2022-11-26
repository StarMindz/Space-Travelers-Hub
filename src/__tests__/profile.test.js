import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Profile from '../components/pages/profile';
import '@testing-library/jest-dom';

describe('Profile Component', () => {
  test('Show Correct render of Profile', () => {
    const myprofile = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Profile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(myprofile).toMatchSnapshot();
  });

  test('Check if \'My Missions\' is in the rendered document of Profile component', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Profile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });

  test('Check if \'My Rockets\' is in the rendered document of Profile component', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Profile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
