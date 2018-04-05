import React from 'react'

const SearchContainer = ({ match }) => {
  return (
    <h3>SearchPage: {match.params.name}</h3>
  )
}

export default SearchContainer
