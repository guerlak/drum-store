import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Globalstyle from './styles/global';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

// import './config/reactotron';

import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Globalstyle></Globalstyle>
                <Routes></Routes>
                <ToastContainer />
            </BrowserRouter>
        </Provider>
    );
}
export default App;
