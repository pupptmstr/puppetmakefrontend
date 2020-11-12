import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


function SearchPagination(props) {

    const {inputData, card} = props;
    console.log(inputData);
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);

    const onGetDataSuccess = ({ data: { array_data } }) => {
        array_data ? setData(array_data) : setData([]);
    };

    useEffect(() => {
        const fetchData = async () => {
            inputData ? onGetDataSuccess(inputData) : console.log(inputData);
        };
        fetchData();
    }, [inputData]);

    return (
        <div className='landing-page-block inline'>
            <div
                className='simple-flex'
                style={data ? {justifyContent: data.slice(page * 3, 3 * (page + 1)).length === 3 ? 'space-between' : 'start'} : null}
            >
                <button
                    className='prev-btn'
                    onClick={() => setPage(Math.max(page - 1, 0))}
                />
                {data ? data.slice(page * 3, 3 * (page + 1)).map((piece, idx) => card(piece, idx)) : "Нет результатов"}
                <button
                    className='next-btn'
                    onClick={() => data ?
                        setPage(Math.min(
                            page + 1,
                            Math.ceil(data.length / 3) - 1)
                        ) : null
                    }
                />
            </div>
        </div>
    )
}

SearchPagination.propTypes = {
    inputData: PropTypes.object.isRequired,
    card: PropTypes.func.isRequired
};

export default SearchPagination;