import { store, setError } from '../store';
import { clearErrorAction } from '../store';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
