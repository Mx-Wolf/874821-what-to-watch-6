import React from 'react';
import {useParams} from 'react-router-dom';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmPageFrame from '../film-page-frame/film-page-frame';
import {useSelector} from 'react-redux';

const selectContent = (tab) => {
  switch (tab) {
    case `details`:
      return FilmDetails;

    case `reviews`:
      return FilmReviews;

    default:
      return FilmOverview;
  }
};

const FilmPage = () => {
  const {tab, id} = useParams();

  const currentFilm = useSelector((state) => state.films.find((el) => el.id === Number(id)));

  const Content = selectContent(tab);

  if (typeof (currentFilm) === `undefined`) {
    return null;
  }

  return <>

    <FilmPageFrame posterImage={currentFilm.posterImage} name={currentFilm.name} genre={currentFilm.genre} released={currentFilm.released} >
      <Content currentFilm={currentFilm} />
    </FilmPageFrame>

  </>;
};

export default FilmPage;
