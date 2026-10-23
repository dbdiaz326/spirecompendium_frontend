import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Ironclad from "./pages/ironclad/Ironclad";
import BurningBlood from "./pages/burningblood/BurningBlood";
import IroncladStrike from "./pages/ironcladstrike/IroncladStrike";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="ironclad" element={<Ironclad />} />
                    <Route path="burning-blood" element={<BurningBlood />} />
                    <Route path="ironclad-strike" element={<IroncladStrike />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);