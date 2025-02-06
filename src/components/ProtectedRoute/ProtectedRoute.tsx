import { Navigate } from 'react-router-dom';
import { ApiRout, AuthorizationStatus } from '../../const';

type ProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children:JSX.Element;
}

function ProtectedRoute (props:ProtectedRouteProps):JSX.Element{
  const {authorizationStatus,children} = props;
  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={ApiRout.Auth}/>
  );
}

export default ProtectedRoute;
