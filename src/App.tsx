import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
    Navbar,
    News,
    Cryptocurrencies,
    Exchanges,
    HomePage,
    CryptoDetails,
} from "./pages";
import "./assets/css/App.css";

const App = () => {
    return (
        <div className="app">
            <div className="nav-bar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/exchanges" element={<Exchanges />} />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route path="/crypto/:uuid" element={<CryptoDetails />} />
                            <Route path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title
                        level={5}
                        style={{ color: "white", textAlign: "center" }}
                    >
                        Copyright © 2021
                        <Link to="/">Cryptoverse Inc.</Link> <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default App;
