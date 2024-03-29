import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store ,persistor} from 'redux/store';
import {App} from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/car-rent-ua">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);

