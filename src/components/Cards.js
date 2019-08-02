import React, { Fragment } from 'react';
import DeckCards from './DeckCards';
import PlayerCards from './PlayerCards';
import TableCards from './TableCards';
import DiscardedCards from './DiscardedCards';
import * as helpers from '../lib/helpers';

const Cards = props => {
  const { cards, field, players, userIndex } = props;
  const findPlayerCardsPosition = () => {
    const avgSide = (field.width + field.height) / 2;
    const fromCenterToPlayerCards = avgSide / 2 - field.playerSpace / 2;

    return Array.from(
      { length: players.length },
      (_, i) => {
        const angle = (i - userIndex) * 360 / players.length;
        const relativeToCenterCoords = helpers.findRightTriangleSides(
          angle + 90,
          fromCenterToPlayerCards
        );
        return {
          angle,
          x: field.width / 2 + relativeToCenterCoords.x,
          y: field.height / 2 + relativeToCenterCoords.y
        };
      }
    );
  };

  const placeCenters = {
    deck: {
      x: field.width * 0.36,
      y: field.height * 0.5
    },
    table: {
      x: field.width * 0.55,
      y: field.height * 0.48
    },
    discarded: {
      x: field.width * 1.7,
      y: field.height * 0.5
    }
  };

  return (
    <Fragment>
      <DeckCards cards={cards.deck} placeCenter={placeCenters.deck} />
      <PlayerCards 
        players={cards.players} 
        playerCardsPosition={findPlayerCardsPosition()} 
        userIndex={userIndex}
      />
      <TableCards attacks={cards.table} placeCenter={placeCenters.table} />
      <DiscardedCards cards={cards.discarded} placeCenter={placeCenters.discarded} />
    </Fragment>
  );
};

export default Cards;
