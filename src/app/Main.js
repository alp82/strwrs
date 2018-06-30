import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'semantic-ui-react'

import connectState from './connectState'
import FilmList from '../modules/list/FilmList'
import FilmDetails from '../modules/details/FilmDetails'
import SearchForm from '../modules/search/SearchForm'
import Box from '../ui/Box'
import Title from '../ui/Title'

class Main extends Component {
  static propTypes = {
    initializing: PropTypes.bool.isRequired,
    films: PropTypes.object.isRequired,
    selection: PropTypes.object,
    dispatchInitRequest: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selection: null,
  }

  componentDidMount() {
    this.props.dispatchInitRequest()
  }

  render() {
    const { initializing, films, selection } = this.props

    return (
      <Box>
        <Title>Hi!</Title>
        <SearchForm />
        <Loader active={initializing} />
        <FilmList films={films} />
        {selection && <FilmDetails film={selection} />}
      </Box>
    )
  }
}

export default connectState(Main)
