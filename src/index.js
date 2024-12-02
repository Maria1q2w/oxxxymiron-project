import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { BasketProvider } from './components/oxxxyshop/BasketContext';
import { store } from './store';

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store} >
        <BasketProvider >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </BasketProvider>
    </Provider>
)
