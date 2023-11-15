

import ReactDOM from 'react-dom/client';
import React, { useState } from "react";
import Header from "./Header";

import Main from './Main';
import Footer from "./Footer";


const App = () => {


    return (
        <>
            <Header />


            <Main />
            <Footer />
        </>
    );
};

export default App;


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);


