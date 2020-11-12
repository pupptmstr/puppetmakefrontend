import React, {useEffect, useState} from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import axios from "axios";
import {withRouter} from "react-router-dom";
import BigProjectCard from "./BigProjectCard";

function OneProjectPage(props) {
    const [data, setData] = useState(null);
    const newsId = props.match.params.id;


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/projects/one`, {params: {id: newsId}});
            onGetDataSuccess(response);
        };
        fetchData();
    }, [newsId]);

    function onGetDataSuccess({data: {array_data}}) {
        setData(array_data[0]);
    }

    return (
        <div className='App-page'>
            <header className='App-header'>
                <Header/>
            </header>

            <main>
                <div className={'shadowed-name'}> Проекты > {data
                    ? data.project_name
                    : null}
                </div>
                <div className={'big-project-card'}>
                    {
                        data
                            ? <BigProjectCard {...data}/>
                            : null
                    }
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}


export default withRouter(OneProjectPage);