import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

const RoutesTree: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
};

export default RoutesTree;
