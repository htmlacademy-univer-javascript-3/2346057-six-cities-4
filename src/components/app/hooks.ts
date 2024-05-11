import { useEffect } from 'react';

import { fetchFavouritesAction, getAuthCheckedStatus, useAppDispatch, useAppSelector } from '../../store';


const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const authCheckedStatus = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    if (authCheckedStatus) {
      dispatch(fetchFavouritesAction());
    }
  }, [dispatch, authCheckedStatus]);
};

export { useFetchFavorites };
