import { useQuery } from '@tanstack/react-query';
import { Outlet, Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { getMyInformation } from '../api/authApi';
import Loading from '../components/Loading';
import { AuthContext } from '../context/authContext';

function ProtectedRoute() {
  const authToken = localStorage.getItem('authToken');
  const { setUserData } = useContext(AuthContext);

  const { data, isError, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getMyInformation(authToken),
    retry: 1,
    enabled: Boolean(authToken),
  });

  useEffect(() => {
    if (data && !isError && !isLoading) {
      setUserData(data);
    }
  }, [data, isError, setUserData, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  if (!authToken || (isError && !data)) {
    console.log(localStorage.getItem('authToken'));
    localStorage.removeItem('authToken');
    console.clear();
    return <Navigate to='/' replace={true} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;