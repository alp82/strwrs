import React from 'react'
import PropTypes from 'prop-types'
import { Image, List } from 'semantic-ui-react'
import { format } from 'date-fns'

import connectState from './connectState'

const FilmList = ({ films, selection, getPoster, dispatchSelect }) => (
  <List selection relaxed="very">
    {Object.keys(films).map(id => {
      const film = films[id]
      const isSelected = selection && film.id === selection.id;
      return (
        <List.Item key={id} active={isSelected} onClick={() => !isSelected && dispatchSelect(film)}>
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
  selection: PropTypes.object,
  getPoster: PropTypes.func.isRequired,
  dispatchSelect: PropTypes.func.isRequired,
}

FilmList.defaultProps = {
  selection: null,
}

export default connectState(FilmList)
