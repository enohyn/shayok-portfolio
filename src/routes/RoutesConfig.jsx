import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/portfolio" element={<ProjectExperience />} /> */}
                {/* <Route path="/crowdsource/*" element={<CsRoutes />} /> */}
                {/* <Route path="/braille/*" element={<BtbcRoutes />} /> */}
                {/* <Route path="/chat/*" element={<BtbcRoutes />} /> */}
                {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
                {/* <Route path="/annotation/*" element={<AnnotRoutes />} /> */}
                {/* <Route path="/password/*" element={<PasswordRoutes />} /> */}
                {/* <Route path="/not-found/*" element={<NotFoundRoutes />} /> */}
                {/* <Route path="/*" element={<Navigate to="not-found" />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesConfig;