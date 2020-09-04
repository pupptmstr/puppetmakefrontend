import React from 'react';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import MainCompanyInfo from "./components/main_page/MainCompanyInfo";
import MainBlog from "./components/main_page/MainBlog";
import MainTeam from "./components/main_page/MainTeam";
import MainProjects from "./components/main_page/MainProjects";
import MainHelp from "./components/main_page/MainHelp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main>
        <div className={"company-info"}>
            <MainCompanyInfo />
        </div>

        <div className="blog">
            <MainBlog />
        </div>

        <div className="team">
            <MainTeam />
        </div>

        <div className="projects">
            <MainProjects />
        </div>

        <div className="help">
            <MainHelp />
        </div>


      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
