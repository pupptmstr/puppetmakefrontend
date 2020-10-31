import React, {useEffect, useState} from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import BigBlogCard from "./BigBlogCard";
import axios from "axios";
import {object} from "prop-types";
import {withRouter} from "react-router-dom";

function OneNewsPage(props) {
    const [data, setData] = useState({});
    const [page, setPage] = useState(0);
    const newsId = props.match.params.id;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/news/one`, {params: {id: newsId}});
            onGetDataSuccess(response);
        };
        fetchData();
    }, [newsId]);

    function onGetDataSuccess({ data: { array_data } }) {
        setData(array_data[0]);
        console.log(array_data[0])
    }

    return(
        <div className='App'>
            <header className='App-header'>
                <Header />
            </header>

            <main>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}


export default withRouter(OneNewsPage);