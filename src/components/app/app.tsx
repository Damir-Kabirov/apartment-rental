import MainPage from '../../pages/MainPage/MainPage';
type AppScreenProps ={
  countOffers:number;
}

function App(props:AppScreenProps): JSX.Element {
  return <MainPage countOffers={props.countOffers}/>;
}

export default App;
