import React from 'react'
import { useState } from "react";
import { PropagateLoader } from 'react-spinners';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <PropagateLoader 
        color='#1d4ed8'
      />
    </div>
  );
}

export default Spinner