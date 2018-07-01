import { connect } from 'react-redux'

import { getSelection, getPoster } from '../../store/selectors'

const mapStateToProps = state => ({
  film: getSelection(state),
  getPoster: id => getPoster(state, id),
})

const mapDispatchToProps = () => ({})

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
