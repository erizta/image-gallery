import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
  const { user } = useAuth();

  if(user){
    return <Navigate to="/" replace={true} />
  }
  return <div>PublicRoute</div>;
};

export default PublicRoute;
