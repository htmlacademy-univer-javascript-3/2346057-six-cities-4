
import CityCard from '../offer-card/offer-card';
import { OffersCardListProps } from '../../types/card-list';
import { CardType } from '../../const';
// import { useState } from 'react';

function NearestCitiesCardList({ offers }: OffersCardListProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <CityCard
          key={offer.id}
          cardInfo={offer}
          typeClassName={CardType.nearest}
        />
      ))}
    </div>
  );
}

export default NearestCitiesCardList;
