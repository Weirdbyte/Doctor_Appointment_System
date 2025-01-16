import React from 'react'
import "../styles/RegisterStyles.css"
import {Form, Input} from 'antd'

const Register = () => {

  const onfinishHandler = (values) => {
    console.log(values);
  }

  return (
    <> 

      <div className="form-container ">
          <Form layout='vertical' onFinish={onfinishHandler} className='reg-form' >
              <h3 className='text-center'>Register</h3>

              <Form.Item label="Name" name="name" >
                <Input type="text" required />
              </Form.Item>

              <Form.Item label="Email" name="email" >
                <Input type="email" required />
              </Form.Item>
              
              <Form.Item label="Password" name="password" >
                <Input type="password" required />
              </Form.Item>

              <button className='btn btn-primary text-center ' type="submit">Register</button>
              <p className="text-center mt-4">
                Already have an account?{' '}
                <a href="/login" className="text-blue-500 hover:underline">
                  Log in
                </a>
              </p>

          </Form>
      </div>
    </>
  )
}

export default Register