import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


function Pagination(props) {
  const { viewAllText, url, title, card, initialData } = props;

  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);


  useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get(`http://localhost:8080/${url}`);
          onGetDataSuccess(response);
      };
      fetchData();
  }, [url]);

  function onGetDataSuccess({data: { _embedded } }) {
      const dataName = Object.keys(_embedded)[0];
      setData(_embedded[dataName]);
  }

  return (
    <div className='landing-page-block'>
      <h1>{title}</h1>
      <div
        className='simple-flex'
        style={{ justifyContent: data.slice(page * 3, 3 * (page + 1)).length === 3 ? 'space-between' : 'start' }}
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
      {viewAllText ? <button className='view-all-btn'>{viewAllText}</button> : null}
    </div>
  )
}

Pagination.propTypes = {
  viewAllText: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  card: PropTypes.func.isRequired
};

export default Pagination;