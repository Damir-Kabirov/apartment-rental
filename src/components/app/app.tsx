import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import FavoritPage from '../../pages/FavoritPage/FavoritPage';
import PropertyPage from '../../pages/PropertyPage/PropertyPage';
import AutnPage from '../../pages/AuthPage/AuthPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ApiRout, AuthorizationStatus } from '../../const';
type AppScreenProps ={
  countOffers:number;
}

function App(props:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ApiRout.Root} element={<MainPage countOffers={props.countOffers} />}/>
        <Route path={ApiRout.Main} element={<MainPage countOffers={props.countOffers} />}/>
        <Route path={ApiRout.Fovorit} element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritPage/>
          </ProtectedRoute>
        }
        >
        </Route>
        <Route path={ApiRout.Property} element={<PropertyPage/>}></Route>
        <Route path={ApiRout.Auth} element={<AutnPage/>}></Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
