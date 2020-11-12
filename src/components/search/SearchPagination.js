import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


function SearchPagination(props) {

    const {inputData, card} = props;
    console.log(inputData);
    const [page, setPage] = useState(0);

    return (
        <div className='landing-page-block inline'>
            <div
                className='simple-flex'
                style={inputData ? {justifyContent: inputData.slice(page * 3, 3 * (page + 1)).length === 3 ? 'space-between' : 'start'} : null}
            >
                <button
                    className='prev-btn'
                    onClick={() => setPage(Math.max(page - 1, 0))}
                />
                {inputData ? inputData.slice(page * 3, 3 * (page + 1)).map((piece, idx) => card(piece, idx)) : "Нет результатов"}
                <button
                    className='next-btn'
                    onClick={() => inputData ?
                        setPage(Math.min(
                            page + 1,
                            Math.ceil(inputData.length / 3) - 1)
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