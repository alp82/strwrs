import React from 'react'
import PropTypes from 'prop-types'
import { Item, Icon } from 'semantic-ui-react'
import styled from 'react-emotion'
import { Trail } from 'react-spring'
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
        <Trail from={{ opacity: 0 }} to={{ opacity: 1 }} keys={[0, 1, 2, 3, 4, 5]}>
          {[
            styles =>
              <Item.Header style={styles}>
                {film.fields.title}
              </Item.Header>,
            styles =>
              <Item.Meta style={styles}>
                <Icon name="film" /> Produced by {film.fields.producer}
              </Item.Meta>,
            styles =>
              <Item.Meta style={styles}>
                <Icon name="announcement" /> Directed by {film.fields.director}
              </Item.Meta>,
            styles =>
              <Item.Description style={styles}>
                <FilmDescription>{film.fields.opening_crawl}</FilmDescription>
              </Item.Description>,
            styles =>
              <Item.Extra style={styles}>
                released {format(film.fields.release_date, 'MMM Do YYYY')}
              </Item.Extra>,
          ]}
        </Trail>
      </Item.Content>
    </Item>
  </Item.Group>
)

FilmDetails.propTypes = {
  film: PropTypes.object.isRequired,
  getPoster: PropTypes.func.isRequired,
}

export default connectState(FilmDetails)
