import { Fragment } from 'react';

type InputStarProps = {
    starKey?:number;
}

function InputStar({starKey = 0}:InputStarProps):JSX.Element{
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={starKey} id={`${starKey}-stars`} type="radio"/>
      <label htmlFor={`${starKey}-stars`} className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default InputStar;
