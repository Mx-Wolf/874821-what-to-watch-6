import React from 'react';
import {Redirect, Route} from 'react-router';
import useAuthtorization from '../../api/use-authtorization';
import {Pages} from '../../const';
import privateRouteProps from './private-route.prop';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;
  const authtorizationStatus = useAuthtorization();

  return (

    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (authtorizationStatus ? render(routeProps) : <Redirect to={Pages.LOGIN} />);
      }}
    />

  );
};

PrivateRoute.propTypes = privateRouteProps;

export default PrivateRoute;
