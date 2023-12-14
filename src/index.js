import React from "react";
import ReactDOM  from "react-dom/client";


import { HashRouter, Route, Routes } from "react-router-dom";


import Home from "./Home";
import Login from './Form/Login'
import Signup from './Form/Signup'
import DirectChatPage from "./App/App";
import Form_index from "./Form/Form_Index";

function HomePage(){
    return(
        <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route index element={<Form_index/>} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
            </Route>
            <Route path="app" element={<DirectChatPage/>} />
        </Routes>
        </HashRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HomePage/>
);