/** Black (prompt) or white (answer) card in a CAH-style deck. */
export type CardColor = 'black' | 'white';

export interface Card {
  id: string;
  color: CardColor;
  text: string;
  packId: string;
}

export interface CardPack {
  id: string;
  name: string;
  description: string;
  locale: 'tl' | 'en' | 'taglish';
  blackCards: Card[];
  whiteCards: Card[];
}
