export { store } from './store';

export {
  fetchOfferAction,
  updateSingleOffer,
  getOffer,
  getIsOfferLoading,
} from './slices/offer';

export {
  fetchReviewsAction,
  postReviewAction,
  setReviewsErrorStatus,
  getReviewsHasError,
  getHasError,
  getReviews,
  getIsReviewsLoading,
  getIsReviewsStatusSubmitting,
} from './slices/reviews';

export {
  fetchNearbyAction,
  updateMultipleNearby,
  getNearbyOffers,
  getIsNearbyOffersLoading,
} from './slices/nearby-offers';

export {
  changeFavouriteStatusAction,
  fetchFavouritesAction,
  updateMultipleFavourites,
  getFavorites,
  getIsFavoriteStatusSubmitting,
  getFavouritesCount,
  getIsFavoritesLoading,
} from './slices/favourites';

export {
  changeSortingType,
  changeCity,
  getSelectedSortType,
  getSelectedCity,
  getError,
  setError,
  clearErrorAction
} from './slices/global';

export {
  fetchOffersAction,
  updateMultipleOffers,
  getOffers,
  getIsOffersLoading,
} from './slices/multiple-offers';

export {
  checkAuthAction,
  loginAction,
  logoutAction,
  getIsSubmittingLogin,
  getAuthCheckedStatus,
  getUserInfo,
  getAuthorizationStatus,
} from './slices/user';

export {
  useAppDispatch,
  useAppSelector
} from './hooks';
