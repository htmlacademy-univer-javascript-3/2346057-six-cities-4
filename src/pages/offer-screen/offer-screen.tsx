import { useParams } from 'react-router-dom';
import NearbyOffers from '../../components/nearby-offers/nearby-offers';
import {
  getIsNearbyOffersLoading,
  getIsOfferLoading,
  getIsReviewsLoading,
  getNearbyOffers,
  getOffer,
  useAppSelector
} from '../../store';

import ErrorScreen from '../error-screen/error-screen';
import { useOfferData, usePageInfo } from './hooks';
import OfferInfo from '../../components/offer-info/offer-info';
import Loader from '../../components/loader/loader';
import { Offer } from '../../types/offer';

const getShuffledNearby = (nearby: readonly Offer[]): Offer[] =>
  [...nearby].sort(() => Math.random() - 0.5);

const MAX_OFFERS_PREVIEW = 3;

function OfferPage(): JSX.Element | null {
  const offer = useAppSelector(getOffer);
  const nearbyList = useAppSelector(getNearbyOffers);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isNearbyOffersLoading = useAppSelector(getIsNearbyOffersLoading);

  const isAllLoading =
    isOfferLoading || isNearbyOffersLoading || isReviewsLoading;
  const limitedNearby = getShuffledNearby(nearbyList).slice(
    0,
    MAX_OFFERS_PREVIEW
  );
  const id = String(useParams().id);

  useOfferData(id);
  usePageInfo(offer);

  if (isAllLoading) {
    return <Loader />;
  }

  if (!offer) {
    return <ErrorScreen />;
  }

  return (
    <main className="page__main page__main--offer">
      <OfferInfo offer={offer} id={id} limitedNearby={limitedNearby} />
      <div className="container">
        <NearbyOffers nearPlaces={limitedNearby} />
      </div>
    </main>
  );
}

export default OfferPage;
