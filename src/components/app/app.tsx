import {
  checkAuthAction,
  fetchOffersAction,
  getHasError,
  getIsOffersLoading,
  store,
  useAppSelector
} from '../../store';
import ErrorScreen from '../../pages/error-screen/error-screen';
import AppRoutes from '../routing/app-routes/app-routes';

import { useFetchFavorites } from './hooks';
import Loader from '../loader/loader';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);
  const hasError = useAppSelector(getHasError);

  useFetchFavorites();

  if (isOffersDataLoading) {
    return <Loader />;
  }

  if (hasError) {
    return <ErrorScreen />;
  }

  return <AppRoutes />;
}

export default App;
