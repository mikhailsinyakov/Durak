import React, { Fragment } from 'react';
import TrumpSymbol from './TrumpSymbol';
import Card from './Card';

const DeckCards = props => {
  const { cards, placeCenter } = props;
  
  const addProps = (card, i) => {
    const shift = {
      x: i * 0.1 + (card.trump ? -19 : 0),
      y: -i * 0.1 + (card.trump ? 13 : 0)
    };
    const coords = {
      x: placeCenter.x + shift.x,
      y: placeCenter.y + shift.y
    };
    const rotation = card.trump ? 90 : 0;
    return {
      ...card,
      lastDeckCard: i === 51,
      coords,
      rotation,
      side: card.trump ? 'front' : 'back'
    };
  };

  return (
    <Fragment>
      {
        cards.length ?
          cards.map(addProps).map(card => <Card {...card} key={card.id} />) :
          <TrumpSymbol placeCenter={placeCenter} />
      }
    </Fragment>
  );
};

export default DeckCards;
