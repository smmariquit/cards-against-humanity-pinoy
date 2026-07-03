import { Card, CardPack } from './types';

export function allCards(pack: CardPack): Card[] {
  return [...pack.blackCards, ...pack.whiteCards];
}

export function drawRandom(cards: Card[], count: number): Card[] {
  const pool = [...cards];
  const drawn: Card[] = [];
  const limit = Math.min(count, pool.length);

  for (let i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * pool.length);
    drawn.push(pool.splice(index, 1)[0]);
  }

  return drawn;
}
