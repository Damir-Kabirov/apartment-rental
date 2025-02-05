import { Fragment } from 'react';
import Header from '../../components/Header/Header';

function MainEmpty(){
  return (
    <Fragment>
      <Header/>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
        </div>
      </section>
    </Fragment>
  );
}

export default MainEmpty;
