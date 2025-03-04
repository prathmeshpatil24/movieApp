import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query');
  return (
    <div>
      <h1>Search Results</h1>
      <p>You searched for: <strong>{decodeURIComponent(searchQuery)}</strong></p>
    </div>
  )
}

export default SearchPage;
