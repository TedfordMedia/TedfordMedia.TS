import { createRoot } from "react-dom/client";
import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container!);
// root.render(<App tab="home" />);

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";

// const rootElement = document.getElementById("root");
// render(
//     <React.StrictMode>
//         <Router>
//             <App />
//         </Router>
//     </React.StrictMode>,
//     rootElement
// );

// import { createRoot } from "react-dom/client";
// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
