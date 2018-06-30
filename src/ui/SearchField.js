import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Input } from 'semantic-ui-react'

const SearchField = ({ value, isLoading, error, onSearch, ...rest }) => (
  <Input
    placeholder="Search..."
    icon="search"
    value={value}
    loading={isLoading}
    error={error}
    onChange={_.debounce(onSearch, 500, { leading: true })}
    fluid
    {...rest}
  />
)

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default SearchField
