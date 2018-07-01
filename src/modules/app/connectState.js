import { connect } from 'react-redux'

import { Creators } from '../../store/actions'
import { getInitializing, getSelection, getSearchResults } from '../../store/selectors'

const mapStateToProps = state => ({
  initializing: getInitializing(state),
  selection: getSelection(state),
  films: getSearchResults(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchInitRequest: () => dispatch(Creators.initRequest()),
})

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
