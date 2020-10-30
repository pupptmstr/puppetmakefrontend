import React, {useEffect, useState} from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import BigBlogCard from "./BigBlogCard";
import axios from "axios";
import {object} from "prop-types";

function OneNewsPage() {
    const [data, setData] = useState(object);
    const [page, setPage] = useState(0);
    const url = props.location.path;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/${url}`);
            onGetDataSuccess(response);
        };
        fetchData();
    }, [url]);

    function onGetDataSuccess({ data: { array_data } }) {
        setData(array_data[0]);
    }

    return(
        <div className='App-additions'>
            <header className='App-header'>
                <Header />
            </header>

            <main>
                <BigBlogCard
                />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}


export default OneNewsPage;