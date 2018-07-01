import { connect } from 'react-redux'

import { Creators } from '../../store/actions'
import { getSearchSort, getSearchQuery } from '../../store/selectors'

const mapStateToProps = state => ({
  search: {
    sort: getSearchSort(state),
    query: getSearchQuery(state),
  },
})

const mapDispatchToProps = dispatch => ({
  dispatchSort: by => dispatch(Creators.sort(by)),
  dispatchSearch: query => dispatch(Creators.search(query)),
})

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
