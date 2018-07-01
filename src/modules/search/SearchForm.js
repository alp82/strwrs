import React from 'react'
import PropTypes from 'prop-types'
import { Form, Dropdown, Input } from 'semantic-ui-react'
import styled from 'react-emotion'

import connectState from './connectState'

const CompactForm = styled(Form)`
  display: flex;
  margin: 0;
`

const SortDropdown = styled(Dropdown)`
  margin-right: 2em;
  min-width: 10em !important;
`

const SearchInput = styled(Input)`
  flex: 1;
`

const sortOptions = [
  {
    key: 'episode',
    text: 'Sort by Episode',
    value: 'episode',
    content: 'Episode',
  },
  {
    key: 'year',
    text: 'Sort by Year',
    value: 'year',
    content: 'Year',
  },
]

const SearchForm = ({ search, dispatchSort, dispatchSearch }) => {
  const { sort, query } = search

  const handleSortChange = (e, { value }) => {
    dispatchSort(value)
  }

  const handleSearchChange = (e, { value }) => {
    dispatchSearch(value)
  }

  return (
    <CompactForm size="large">
      <SortDropdown
        placeholder="Sort by..."
        header="Sort by"
        selection
        options={sortOptions}
        defaultValue={sort || sortOptions[0].value}
        onChange={handleSortChange}
      />
      <SearchInput
        placeholder="Search..."
        icon="search"
        value={query}
        onChange={handleSearchChange}
        fluid
      />
    </CompactForm>
  )
}

SearchForm.propTypes = {
  search: PropTypes.object.isRequired,
  dispatchSort: PropTypes.func.isRequired,
  dispatchSearch: PropTypes.func.isRequired,
}

export default connectState(SearchForm)
