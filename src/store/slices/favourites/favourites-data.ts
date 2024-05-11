import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '../../../types/offer';
import { NameSpace } from '../../../const';
import {
  changeFavouriteStatusAction,
  fetchFavouritesAction,
} from './api-actions';

type FavouritesData = {
  favourites: Offer[];
  isFavouritesLoading: boolean;
  isFavouriteStatusSubmitting: boolean;
  hasError: boolean;
};

const updateFavourites = (favorites: Offer[], updatedOffer: Offer) => {
  const favoriteOfferIndex = favorites.findIndex(
    (el) => el.id === updatedOffer.id
  );

  if (updatedOffer.isFavorite && favoriteOfferIndex === -1) {
    favorites.push(updatedOffer);
  } else if (!updatedOffer.isFavorite && favoriteOfferIndex !== -1) {
    favorites.splice(favoriteOfferIndex, 1);
  }
};

const initialState: FavouritesData = {
  favourites: [],
  isFavouritesLoading: false,
  isFavouriteStatusSubmitting: false,
  hasError: false,
};

export const favouritesData = createSlice({
  name: NameSpace.FavouritesData,
  initialState,
  reducers: {
    updateMultipleFavourites: (state, action: PayloadAction<Offer>) => {
      updateFavourites(state.favourites, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavouritesAction.pending, (state) => {
        state.hasError = false;
        state.isFavouritesLoading = true;
      })
      .addCase(fetchFavouritesAction.fulfilled, (state, action) => {
        state.favourites = action.payload;
        state.isFavouritesLoading = false;
      })
      .addCase(fetchFavouritesAction.rejected, (state) => {
        state.hasError = true;
        state.isFavouritesLoading = false;
      })
      .addCase(changeFavouriteStatusAction.pending, (state) => {
        state.isFavouriteStatusSubmitting = true;
      })
      .addCase(changeFavouriteStatusAction.fulfilled, (state) => {
        state.isFavouriteStatusSubmitting = false;
      })
      .addCase(changeFavouriteStatusAction.rejected, (state) => {
        state.isFavouriteStatusSubmitting = false;
      });
  },
});

export const { updateMultipleFavourites } = favouritesData.actions;
