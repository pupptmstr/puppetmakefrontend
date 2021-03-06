import React from "react";
import Header from "../shared/Header";
import MainCompanyInfo from "./MainCompanyInfo";
import MainBlog from "./blog/MainBlog";
import MainTeam from "./team/MainTeam";
import Footer from "../shared/Footer";
import MainProject from "./projects/MainProject";

function MainPage() {
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

                <MainProject />


            </main>

            <footer>
              <Footer />
            </footer>
        </div>
    );
}

export default MainPage;