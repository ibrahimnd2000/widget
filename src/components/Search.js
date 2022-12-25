import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {}, [term]);

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
