import React from 'react'
import PropTypes from 'prop-types'
import { Image, List } from 'semantic-ui-react'
import { format } from 'date-fns'

import connectState from './connectState'

const FilmList = ({ films, getPoster, dispatchSelect }) => (
  <List selection relaxed="very">
    {Object.keys(films).map(id => {
      const film = films[id]
      return (
        <List.Item key={id} onClick={() => dispatchSelect(film)}>
          <Image avatar src={getPoster(film.id)} />
          <List.Content>
            <List.Header>{film.fields.title}</List.Header>
            <List.Description>
              released {format(film.fields.release_date, 'MMM Do YYYY')}
            </List.Description>
          </List.Content>
        </List.Item>
      )
    })}
  </List>
)

FilmList.propTypes = {
  films: PropTypes.object.isRequired,
  getPoster: PropTypes.func.isRequired,
  dispatchSelect: PropTypes.func.isRequired,
}

export default connectState(FilmList)
