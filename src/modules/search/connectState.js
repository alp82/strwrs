import { connect } from 'react-redux'

import { Creators } from '../../store/actions'
import {
  getSearchQuery,
  getSearchIsLoading,
  getSearchError,
} from '../../store/selectors'

const mapStateToProps = state => ({
  search: {
    query: getSearchQuery(state),
    isLoading: getSearchIsLoading(state),
    error: getSearchError(state),
  },
})

const mapDispatchToProps = dispatch => ({
  dispatchSearchRequest: query => dispatch(Creators.searchRequest(query)),
})

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
