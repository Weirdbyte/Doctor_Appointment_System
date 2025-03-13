import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { hideloading, showloading } from '../redux/features/alertSlice';
import { setUser } from '../redux/features/userSlice'; 

function ProtectedRoutes({children}) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user)

  //get user
  const getUser = async() => {
    try {
      dispatch(showloading());
      const res = await axios.post('http://localhost:8080/api/v1/user/getUserData',
        {token: localStorage.getItem('token')},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      dispatch(hideloading());
      if(res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        localStorage.clear();
        return <Navigate to="/login" />;
      }
    } catch(error) {
      console.log(error);
      localStorage.clear();
      dispatch(hideloading());
      return <Navigate to="/login" />;
    }
  };

  useEffect(() => {
    if(!user) {
      getUser();
    }
  }, [user, dispatch]); 

  if(!localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoutes;