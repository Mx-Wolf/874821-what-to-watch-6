import React from 'react';
import {Link} from 'react-router-dom';
import cardViewProps from './card-view.prop';

const CardView = (props) => {
  const {film, to, handleClick, handleMouseEnter, handleMouseLeave, children} = props;

  return <>

    <article className="small-movie-card catalog__movies-card" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={to} >{film}</Link>
      </h3>
    </article>

  </>;
};

CardView.propTypes = cardViewProps;

export default CardView;

