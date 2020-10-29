import React from 'react';
import './resources/styles/App.css';
import './resources/styles/Main.css';
import MainPage from "./components/main_page/MainPage";
import OneNewsPage from "./components/blog/OneNewsPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/news/one/:id" component={OneNewsPage} />
                    <Route path="/" component={MainPage} />
                </Switch>
        </BrowserRouter>
    );
}

export default App;
