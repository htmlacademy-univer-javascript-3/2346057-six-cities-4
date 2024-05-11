import { Offer } from '../../../types/offer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';

import { fetchOffersAction } from './api-actions';

type MultipleOffersData = {
  offers: Offer[];
  isOffersLoading: boolean;
  hasError: boolean;
};

const updateOffers = (offers: Offer[], updatedOffer: Offer) => {
  const offerIndex = offers.findIndex((el) => el.id === updatedOffer.id);
  if (offerIndex !== -1) {
    offers[offerIndex] = updatedOffer;
  }
};

const initialState: MultipleOffersData = {
  offers: [],
  isOffersLoading: false,
  hasError: false,
};

export const multipleOffersData = createSlice({
  name: NameSpace.MultipleOffersData,
  initialState,
  reducers: {
    updateMultipleOffers: (state, action: PayloadAction<Offer>) => {
      updateOffers(state.offers, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.hasError = false;
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.hasError = true;
        state.isOffersLoading = false;
      });
  },
});

export const { updateMultipleOffers } = multipleOffersData.actions;
