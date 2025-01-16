import React from 'react'
import "../styles/LoginStyles.css"
import {Form, Input} from 'antd'

const Login = () => {

  const onfinishHandler = (values) => {
    console.log(values);
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
  )
}

export default Login