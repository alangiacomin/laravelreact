import { arrayFill, uniqueId } from '@alangiacomin/js-utils';
import { PropTypes } from 'prop-types';
import { React } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const GridCardDeckComponent = (props) => {
  const { elements, rowLimit, CardComponent } = props;
  const decks = [];
  for (let index = 0; index < elements.length; index += rowLimit) {
    const cards = [];
    for (let c = 0; c < rowLimit && index + c < elements.length; c++) {
      cards.push(elements[index + c]);
    }
    decks.push(cards);
  }
  return decks.map((deck, _i) => (
    <CardDeck key={uniqueId('carddeck_')} className="mb-3">
      {deck.map((v, _i2) => <CardComponent key={uniqueId('cardcomponent_')} element={v} />)}
      {deck.length < rowLimit
        && arrayFill(rowLimit - deck.length).map((_v2, _i2) => (
          <Card
            key={uniqueId('cardcomponent_')}
            style={{ border: '0px' }}
          />
        ))}
    </CardDeck>
  ));
};

GridCardDeckComponent.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowLimit: PropTypes.number.isRequired,
};

GridCardDeckComponent.defaultProps = {
  link: null,
};

export default GridCardDeckComponent;
