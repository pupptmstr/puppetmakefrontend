import React, {useEffect, useState} from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import axios from "axios";
import SearchMainBlog from "./SearchMainBlog";
import SearchMainTeam from "./SearchMainTeam";
import SearchMainProject from "./SearchMainProject";

function SearchMainPage(props) {
    const [data, setData] = useState(null);
    const query = props.match.params.query;


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/search`, {params: {query: query}});

            onGetDataSuccess(response);
        };
        fetchData();
    }, [query]);

    function onGetDataSuccess({data}) {
        setData(data);
    }

    if (data) {
        console.log("Дата:")
        console.log(data.search_news.array_data);
        console.log(data.search_teammates.array_data);
        console.log(data.search_projects.array_data);
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <Header/>
            </header>

            <main>

                <h1>Результаты поиска:</h1>

                <SearchMainBlog
                    props={data ? {data: {... data.search_news.array_data}} : null}/>

                <SearchMainTeam
                    props={data ? {data: {... data.search_teammates.array_data}} : null}/>

                <SearchMainProject
                    props={data ? {data: {... data.search_projects.array_data}} : null}
                />


            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default SearchMainPage;