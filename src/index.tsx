import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Settings } from './const';
import { offers } from './mocks/offers';
// import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App placesCount={Settings.placesCount} reviews={reviews} offers={offers} /> */}
    <App placesCount={Settings.placesCount} offers={offers} />
  </React.StrictMode>
);