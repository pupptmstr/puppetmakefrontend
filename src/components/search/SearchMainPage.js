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

    function onGetDataSuccess({data: data}) {
        setData(data);
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <Header/>
            </header>

            <main>

                <h1>Результаты поиска:</h1>

                <div className={'search-res-blog'}>
                    {
                        data
                        ? <SearchMainBlog {...data.search_news}/>
                        :null
                    }
                </div>

                <div className={'search-res-teammates'}>
                    {
                        data
                            ? <SearchMainTeam {...data.search_teammates}/>
                            :null
                    }
                </div>

                <div className={'search-res-projects'}>
                    {
                        data
                            ? <SearchMainProject {...data.search_projects}/>
                            :null
                    }
                </div>

            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default SearchMainPage;