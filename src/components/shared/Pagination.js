import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


function Pagination(props) {
    const {viewAllText, url, card} = props;

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/${url}/all`);
            onGetDataSuccess(response);
        };
        fetchData();
    }, [url]);

    function onGetDataSuccess({ data: { array_data } }) {
        setData(array_data);
    }

    return (
        <div className='landing-page-block inline'>


            <div
                className='simple-flex'
                style={{justifyContent: data.slice(page * 3, 3 * (page + 1)).length === 3 ? 'space-between' : 'start'}}
            >
                <button
                    className='prev-btn'
                    onClick={() => setPage(Math.max(page - 1, 0))}
                />
                {data ? data.slice(page * 3, 3 * (page + 1)).map((piece, idx) => card(piece, idx)) : null}
                <button
                    className='next-btn'
                    onClick={() =>
                        setPage(Math.min(
                            page + 1,
                            Math.ceil(data.length / 3) - 1)
                        )
                    }
                />
            </div>
            {/*{viewAllText ? <button className='view-all-btn'>{viewAllText}</button> : null}*/}
        </div>
    )
}

Pagination.propTypes = {
    // viewAllText: PropTypes.string,
    done: PropTypes.bool,
    url: PropTypes.string.isRequired,
    card: PropTypes.func.isRequired,
};

export default Pagination;