import React, { Fragment } from 'react';
import Card from './Card';

const DiscardedCards = ({ cards, placeCenter }) => (
  <Fragment>
    {cards.map(card => 
      <Card {...card} key={card.id} coords={ {...placeCenter} } side= 'back' />
    )}
  </Fragment>
);

export default DiscardedCards;
