import { Component } from "react";
import  { createGlobalStyle }  from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "../../pages/Home";
import Catalog from "../../pages/Catalog";
import Coffee from "../../pages/Coffee";
import Pleasure from "../../pages/Pleasure"

const GlobalStyles = createGlobalStyle`

    * {
        font-family: 'Merienda';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;

class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <GlobalStyles />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/catalog/:id" element={<Coffee />} />
                            <Route path="/pleasure" element={<Pleasure />} />
                        </Routes>
                   

                </Router>
            </div>
        )
    }
}

export default App;