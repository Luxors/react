import { useState } from 'react';
import { useDynamicClass } from '../hooks/useCardDynamicClass';

import '../assets/styles/card.css';

import catImage from '../assets/images/cat.png';

import { CardSlogan } from './CardSlogan';

import { plural } from '../utils/plural';

export interface Card {
  id: number;
  consist: string;
  quantity: number;
  gift?: number | undefined;
  weight: string;
  slogan: string;
  isDisabled?: boolean;
}

export function Card({ card }: { card: Card }) {
  const [isSelected, setIsSelected] = useState(false);

  const className = useDynamicClass(undefined, isSelected, card.isDisabled);

  const toggleSelected = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <article className={className}>
      <div className="card-wrapper" onClick={toggleSelected}>
        <div className="card-background"></div>
        <div className="card-product">
          <div className="card-promo">сказочное заморское яство</div>
          <h2 className="card-title">нямушка</h2>
          <div className="card-consist">с {card.consist}</div>
          <ul className="card-includ">
            <li className="card-includ__item">
              <b className="card-includ__item--bold">{card.quantity} </b>
              порций
            </li>
            <li className="card-includ__item">
              {card.gift && (
                <b className="card-includ__item--bold">{card.gift}</b>
              )}{' '}
              {plural(card.gift, ['мышь', 'мыши', 'мышей'])} в подарок
            </li>
          </ul>
        </div>
        <img className="card-image" src={catImage} alt="Нямушка" />
        <div className="card-weight">
          <span className="card-weight__num">{card.weight}</span>
          <span className="card-weight__label">кг</span>
        </div>
      </div>
      <footer className="card-footer">
        <CardSlogan
          slogan={card.slogan}
          isSelected={isSelected}
          isDisabled={card.isDisabled}
          onClick={toggleSelected}
        />
      </footer>
    </article>
  );
}
