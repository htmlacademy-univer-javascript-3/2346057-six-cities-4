import {
  checkAuthAction,
  fetchOffersAction,
  getHasError,
  getIsOffersLoading,
  store,
  useAppSelector
} from '../../store';
import ErrorScreen from '../../pages/error-screen/error-screen';
import AppRoutes from '../app-routes/app-routes';
import Loader from '../loader/loader';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);
  const hasError = useAppSelector(getHasError);

  if (isOffersDataLoading) {
    return <Loader />;
  }

  if (hasError) {
    return <ErrorScreen />;
  }

  return <AppRoutes />;
}

export default App;
