import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Loader, Segment } from 'semantic-ui-react'

import connectState from './connectState'
import FilmList from '../list/FilmList'
import FilmDetails from '../details/FilmDetails'
import SearchForm from '../search/SearchForm'
import Box from '../ui/Box'
import NoSelection from '../ui/NoSelection'

class Main extends Component {
  static propTypes = {
    initializing: PropTypes.bool.isRequired,
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
    const { initializing, selection } = this.props

    return (
      <Box>
        <Segment inverted color="grey">
          <SearchForm />
        </Segment>
        <Segment basic>
          <Loader active={initializing} />
          <Grid columns="two" divided>
            <Grid.Row>
              <Grid.Column>
                <FilmList />
              </Grid.Column>
              <Grid.Column>
                {selection ? <FilmDetails /> : <NoSelection />}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Box>
    )
  }
}

export default connectState(Main)
