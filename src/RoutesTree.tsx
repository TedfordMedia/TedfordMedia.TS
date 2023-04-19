import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Brain from "./pages/Brain";

const RoutesTree: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Brain" element={<Brain />} />
        </Routes>
    );
};

export default RoutesTree;
