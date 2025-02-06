import { NavLink } from 'react-router-dom';
const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
function MainTabs(){
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {cities.map((citi)=>(
            <li key={citi} className="locations__item">
              <NavLink className="locations__item-link tabs__item" to={`/main/${citi}`}>
                <span>{citi}</span>
              </NavLink>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

export default MainTabs;
