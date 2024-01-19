import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/feature/Main/Main";
import "../src/index.css";
import Login from "./feature/Login/Login";


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}>
                <Route path="notification" element={<Main />} />
            </Route>
        </Routes>
    </BrowserRouter>
)