import React from 'react'
import PropTypes from 'prop-types'
import { Item, Icon } from 'semantic-ui-react'
import styled from 'react-emotion'
import { format } from 'date-fns'

import connectState from './connectState'

const FilmDescription = styled.p`
  margin-top: 1.5em !important;
  margin-bottom: 1em !important;
  font-size: 1.3em;
`

const FilmDetails = ({ film, getPoster }) => (
  <Item.Group>
    <Item>
      <Item.Image size="small" src={getPoster(film.id)} />

      <Item.Content>
        <Item.Header>{film.fields.title}</Item.Header>
        <Item.Meta>
          <Icon name='film' /> Produced by {film.fields.producer}
        </Item.Meta>
        <Item.Meta>
          <Icon name='announcement' /> Directed by {film.fields.director}
        </Item.Meta>
        <Item.Description>
          <FilmDescription>{film.fields.opening_crawl}</FilmDescription>
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
