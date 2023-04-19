import React from "react";
import RoutesTree from "./RoutesTree";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => (
    <div id="app">
        <Router>
            <RoutesTree />
        </Router>
    </div>
);

export default App;
