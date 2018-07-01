import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import styled from 'react-emotion'
import { Transition } from 'react-spring'
import { format } from 'date-fns'

import connectState from './connectState'

const SelectableItem = styled(Item)`
  background: ${props =>
    props.active ? 'rgba(0,0,0,.05) !important' : 'none'};
`

const FilmList = ({ films, selection, getPoster, dispatchSelect }) => (
  <Item.Group link>
    <Transition
      keys={films.map(film => film.id)}
      from={{ opacity: 0.5, height: 0, marginBottom: 0 }}
      leave={{ opacity: 0, height: 0, marginBottom: 0, pointerEvents: 'none' }}
      enter={{ opacity: 1, height: 52, marginBottom: 32 }}
    >
      {films.map(film => styles => {
        const isSelected = selection && film.id === selection.id
        const active = isSelected ? 'true' : null
        return (
          <SelectableItem
            key={film.id}
            style={styles}
            active={active}
            onClick={() => !isSelected && dispatchSelect(film)}>
            <Item.Image size="mini" src={getPoster(film.id)}/>

            <Item.Content verticalAlign="middle">
              <Item.Header>{film.fields.title}</Item.Header>
              <Item.Extra>
                released {format(film.fields.release_date, 'MMM Do YYYY')}
              </Item.Extra>
            </Item.Content>
          </SelectableItem>
        )
      })}
    </Transition>
  </Item.Group>
)

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  selection: PropTypes.object,
  getPoster: PropTypes.func.isRequired,
  dispatchSelect: PropTypes.func.isRequired,
}

FilmList.defaultProps = {
  selection: null,
}

export default connectState(FilmList)
