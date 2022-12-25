import React, { useState, useEffect } from 'react';
import wikipedia from '../api/wikipedia';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await wikipedia.get('/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
    };

    search();
  }, [term]);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='input'>Enter Search Term</label>
          <input
            id='input'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type='text'
            className='input'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
