import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';
import styled from 'react-emotion';

import connectState from './connectState';
import SearchField from '../../ui/SearchField';

const CompactForm = styled(Form)`
  margin: 0;
`;

const SearchForm = ({ search, dispatchSearchRequest }) => {
  const { isLoading, error, query } = search;

  const handleSearchChange = (e, { value }) => {
    dispatchSearchRequest(value)
  };

  return (
    <CompactForm size="large" error={Boolean(error)}>
      <SearchField
        value={query}
        isLoading={isLoading}
        error={Boolean(error)}
        onSearch={handleSearchChange}
      />
      {error && <Message error header="Search Error" content={error} />}
    </CompactForm>
  )
}

SearchForm.propTypes = {
  search: PropTypes.object.isRequired,
  dispatchSearchRequest: PropTypes.func.isRequired,
}

export default connectState(SearchForm)
