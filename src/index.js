import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Ironclad from "./pages/ironclad/Ironclad";
import BurningBlood from "./pages/burningblood/BurningBlood";
import IroncladStrike from "./pages/ironcladstrike/IroncladStrike";
import Silent from "./pages/silent/Silent";
import RingOfTheSnake from "./pages/ringofthesnake/RingOfTheSnake";
import SilentStrike from "./pages/silentstrike/SilentStrike";
import Defect from "./pages/defect/Defect";
import CrackedCore from "./pages/crackedcore/CrackedCore";
import DefectStrike from "./pages/defectstrike/DefectStrike";

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

                <Route element={<Layout theme="silent-theme" />}>
                    <Route path="silent" element={<Silent />} />
                    <Route path="ring-of-the-snake" element={<RingOfTheSnake />} />
                    <Route path="silent-strike" element={<SilentStrike />} />
                </Route>

                <Route element={<Layout theme="defect-theme" />}>
                    <Route path="defect" element={<Defect />} />
                    <Route path="cracked-core" element={<CrackedCore />} />
                    <Route path="defect-strike" element={<DefectStrike />} />
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