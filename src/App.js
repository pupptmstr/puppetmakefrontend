import React from 'react';
import './resources/styles/App.css';
import './resources/styles/Main.css';
import MainPage from "./components/main_page/MainPage";
import OneNewsPage from "./components/blog/OneNewsPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OneTeammatePage from "./components/teammates/OneTeammatePage";
import OneProjectPage from "./components/projects/OneProjectPage";
import SearchMainPage from "./components/search/SearchMainPage";


function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/news/one/:id" component={OneNewsPage} />
                    <Route path="/teammates/one/:id" component={OneTeammatePage} />
                    <Route path="/projects/one/:id" component={OneProjectPage} />
                    <Route path="/search/:query" component={SearchMainPage} />
                    <Route path="/" component={MainPage} />
                </Switch>
        </Router>
    );
}

export default App;
