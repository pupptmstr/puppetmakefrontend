import React from 'react';
import './resources/styles/App.css';
import './resources/styles/Main.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import MainCompanyInfo from './components/main_page/MainCompanyInfo';
import MainBlog from './components/main_page/blog/MainBlog';
import MainTeam from './components/main_page/team/MainTeam';
import MainProjects from './components/main_page/MainProjects';
import MainHelp from './components/main_page/MainHelp';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>

      <main>
        <div className={'company-info'}>
          <MainCompanyInfo />
        </div>

        <MainBlog />

        <MainTeam />

        <div className='projects'>
          <MainProjects />
        </div>

        <div className='help'>
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
