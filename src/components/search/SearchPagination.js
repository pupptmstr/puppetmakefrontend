import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


function SearchPagination(props) {

    const [page, setPage] = useState(0);
    const {data, card} = props;

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
                {data.slice(page * 3, 3 * (page + 1)).map((piece, idx) => card(piece, idx))}
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
        </div>
    )
}

SearchPagination.propTypes = {
    data: PropTypes.object.isRequired,
    card: PropTypes.func.isRequired
};

export default SearchPagination;