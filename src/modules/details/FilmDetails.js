import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import { format } from 'date-fns'

import connectState from './connectState'

const FilmDetails = ({ film, getPoster }) => (
  <Item.Group>
    <Item>
      <Item.Image size="big" src={getPoster(film.id)} />

      <Item.Content>
        <Item.Header>{film.fields.title}</Item.Header>
        <Item.Description>
          <p>{film.fields.opening_crawl}</p>
        </Item.Description>
        <Item.Extra>
          released {format(film.fields.release_date, 'MMM Do YYYY')}
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

FilmDetails.propTypes = {
  film: PropTypes.object.isRequired,
  getPoster: PropTypes.func.isRequired,
}

export default connectState(FilmDetails)
