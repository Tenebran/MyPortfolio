import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './modules/common/fonts/fonts.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Элемент с id 'root' не найден. Проверьте файл index.html.");
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
