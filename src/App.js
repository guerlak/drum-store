import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Globalstyle from './styles/global';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Globalstyle></Globalstyle>
            <Routes></Routes>
        </BrowserRouter>
    );
}

export default App;
