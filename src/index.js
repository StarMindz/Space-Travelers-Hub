import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
reportWebVitals();
