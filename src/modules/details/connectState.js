import { connect } from 'react-redux';

import { getPoster } from '../../store/selectors';

const mapStateToProps = state => ({
  getPoster: id => getPoster(state, id),
});

const mapDispatchToProps = () => ({});

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
