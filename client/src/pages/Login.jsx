import '../styles/LoginStyles.css';
import React from 'react';
import {Form,Input,message} from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showloading,hideloading } from '../redux/features/alertSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onfinishHandler = async (values) => {
    try {
      dispatch(showloading());
      const res = await axios.post('http://localhost:8080/api/v1/user/login',values);
      dispatch(hideloading());
      if(res.data.success){
        localStorage.setItem("token", res.data.token);
        message.success("Login successfully");
        navigate('/');
      }else{
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideloading());
      console.error('Login error:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        message.error(error.response.data.message || 'Something went wrong');
      } else if (error.request) {
        console.error('Error request:', error.request);
        message.error('No response received from server');
      } else {
        console.error('Error message:', error.message);
        message.error('Error in setting up request');
      }
    }
  }

  return (
    <div>
      <div className="form-container ">
          <Form layout='vertical' onFinish={onfinishHandler} className='log-form' >
              <h3 className='text-center'>Login</h3>
              
              <Form.Item label="Email" name="email" >
                <Input type="email" required />
              </Form.Item>

              <Form.Item label="Password" name="password" >
                <Input type="password" required />
              </Form.Item>

              <button className='btn btn-primary ' type="submit">Login</button>
              
              <p className="text-center text-gray-600 text-sm mt-4">
                Don't have an account?{' '}
                <a href="/Register" className="text-blue-500 hover:underline">
                  Register here
                </a>
              </p>

          </Form>
      </div>
    </div>
  );
};

export default Login;