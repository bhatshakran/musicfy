import React, { ChangeEvent, useCallback, useState, useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { axiosInstance } from '../axios';
import debounce from 'lodash.debounce';
import Grid from './Grid';

export const sendNetworkRequest = async (url: string, term: string) => {
  const options = {
    url,
    method: 'get',
    params: {
      term,
      locale: 'en-US',
    },
  };
  const res = await axiosInstance.request(options);
  return res.data;
};

const Search: React.FC = () => {
  const [term, setTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [resultTracks, setResultTracks] = useState([]);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (val: string) => {
        const res = await sendNetworkRequest('auto-complete', val);
        console.log(res);
        if (res) {
          setSuggestions(res.hints);
        }
      }, 500),
    []
  );

  const setInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTerm(e.target.value);
      debouncedSearch(e.target.value);
    },
    [debouncedSearch]
  );

  const searchForTerm = async (term: string) => {
    const res = await sendNetworkRequest('search', term);
    console.log(res);
    setResultTracks(res.tracks.hits);
  };
  return (
    <div className=' p-5 '>
      <div className='input-group '>
        <span
          className='input-group-text border border-ourpink bg-white'
          id='basic-addon1'
        >
          <BiSearch />
        </span>
        <input
          type='text'
          className='form-control border border-ourpink'
          placeholder='search for artists'
          aria-label='search'
          aria-describedby='basic-addon1'
          value={term}
          onChange={(e) => setInput(e)}
        />
        <button
          type='button'
          className='btn btn-ourpink text-white'
          onClick={() => searchForTerm(term)}
        >
          Search
        </button>
      </div>
      {/* search suggestions */}
      <div className='mx-5   '>
        {suggestions &&
          suggestions.map((el: any, id: number) => {
            return (
              <div
                className='hover-bg-light px-1'
                key={id}
                role='button'
                onClick={() => {
                  setTerm(el.term);
                  searchForTerm(el.term);
                  setSuggestions([]);
                }}
              >
                {el.term}
              </div>
            );
          })}
      </div>
      {/* result cards */}
      <div>
        <Grid tracks={resultTracks} nested='true' />
      </div>
    </div>
  );
};

export default Search;