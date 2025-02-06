import Favorites from './Favorites';
import Header from '../../components/Header/Header';
function FavoritPage (){
  return (

    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites/>
        </div>
      </main>

    </div>
  );
}

export default FavoritPage;
