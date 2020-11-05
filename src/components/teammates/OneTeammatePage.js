import React, {useEffect, useState} from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import axios from "axios";
import {withRouter} from "react-router-dom";
import TeammateCard from "./TeammateCard";

function OneTeammatePage(props) {
    const [data, setData] = useState(null);
    const teammateId = props.match.params.id;


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/teammates/one`, {params: {id: teammateId}});
            onGetDataSuccess(response);
        };
        fetchData();
    }, [teammateId]);

    function onGetDataSuccess({data: {array_data}}) {
        setData(array_data[0]);
    }

    return (
        <div className='App-page'>
            <header className='App-header'>
                <Header/>
            </header>

            <main>
                <div className={'shadowed-name'}> Блог > {data
                    ? `${data.first_name} "${data.nickname}" ${data.surname}`
                    : null}
                </div>
                <div className={'teammate-card'}>
                    {
                        data
                            ? <TeammateCard {...data}/>
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


export default withRouter(OneTeammatePage);