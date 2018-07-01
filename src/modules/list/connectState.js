import { connect } from 'react-redux'

import { Creators } from '../../store/actions'
import { getSelection, getPoster } from '../../store/selectors'

const mapStateToProps = state => ({
  selection: getSelection(state),
  getPoster: id => getPoster(state, id),
})

const mapDispatchToProps = dispatch => ({
  dispatchSelect: film => dispatch(Creators.select(film)),
})

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
