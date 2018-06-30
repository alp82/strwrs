import React from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react'

import connectState from './connectState'
import SearchField from '../../ui/SearchField'

const SearchForm = ({ search, dispatchSearchRequest }) => {
  const { isLoading, error, query } = search

  const handleSearchChange = (e, { value }) => {
    dispatchSearchRequest(value)
  }

  return (
    <Form error={Boolean(error)}>
      <SearchField
        value={query}
        isLoading={isLoading}
        error={Boolean(error)}
        onSearch={handleSearchChange}
      />
      <Message error header="Search Error" content={error} />
    </Form>
  )
}

SearchForm.propTypes = {
  search: PropTypes.object.isRequired,
  dispatchSearchRequest: PropTypes.func.isRequired,
}

export default connectState(SearchForm)
