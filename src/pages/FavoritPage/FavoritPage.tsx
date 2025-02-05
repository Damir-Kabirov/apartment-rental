import { Fragment } from 'react';
import Favorites from './Favorites';
import Header from '../../components/Header/Header';
function FavoritPage (){
  return (
    <Fragment>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites/>
        </div>
      </main>
    </Fragment>
  );
}

export default FavoritPage;
