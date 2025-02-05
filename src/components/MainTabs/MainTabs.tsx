import { Link } from 'react-router-dom';

function MainTabs(){
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/main/paris">
              <span>Paris</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/main/cologne">
              <span>Cologne</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/main/brussels">
              <span>Brussels</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item tabs__item--active" to="/main/amsterdam">
              <span>Amsterdam</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/main/hamburg">
              <span>Hamburg</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/main/dusseldorf">
              <span>Dusseldorf</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MainTabs;
