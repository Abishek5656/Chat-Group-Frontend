import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
