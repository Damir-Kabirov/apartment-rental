import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import FavoritPage from '../../pages/FavoritPage/FavoritPage';
import PropertyPage from '../../pages/PropertyPage/PropertyPage';
import AutnPage from '../../pages/AuthPage/AuthPage';
type AppScreenProps ={
  countOffers:number;
}

function App(props:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage countOffers={props.countOffers}/>}/>
          <Route path='main'>
            <Route path='paris'/>
            <Route path='cologne'/>
            <Route path='brussels'/>
            <Route path='amsterdam'/>
            <Route path='hamburg'/>
            <Route path='dusseldorf'/>
          </Route>
          <Route path='fovorit' element={<FavoritPage/>}></Route>
          <Route path='property' element={<PropertyPage/>}></Route>
          <Route path='auth' element={<AutnPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
