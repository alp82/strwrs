import React from 'react'
import PropTypes from 'prop-types'
import { Form, Dropdown, Input, Message } from 'semantic-ui-react'
import styled from 'react-emotion'
import _ from 'lodash'

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


const SearchForm = ({ search, dispatchSearchRequest }) => {
  const { isLoading, error, query } = search

  const handleSearchChange = (e, { value }) => {
    dispatchSearchRequest(value)
  }

  return (
    <CompactForm size="large" error={Boolean(error)}>
      {error && <Message error header="Search Error" content={error} />}
      <SortDropdown
        placeholder='Sort by...'
        header="Sort by"
        selection
        options={sortOptions}
        defaultValue={sortOptions[0].value}
      />
      <SearchInput
        placeholder="Search..."
        icon="search"
        value={query}
        loading={isLoading}
        error={Boolean(error)}
        onChange={_.debounce(handleSearchChange, 500, { leading: true })}
        fluid
      />
    </CompactForm>
  )
}

SearchForm.propTypes = {
  search: PropTypes.object.isRequired,
  dispatchSearchRequest: PropTypes.func.isRequired,
}

export default connectState(SearchForm)
