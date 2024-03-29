import React from 'react';
import './nodata.css';

function NoData() {
  return (
    <div className='nodata'>
      <svg
        height='20vh'
        stroke-width='0.5px'
        stroke-linecap='round'
        fill='none'
        viewBox='0 0 9 9'
      >
        <path
          d='M4.098,1.091c1.178,-0.074 2.354,0.508 2.985,1.6c0.887,1.536 0.359,3.503 -1.177,4.39c-1.535,0.886 -3.502,0.36 -4.389,-1.176c-0.878,-1.522 -0.37,-3.466 1.132,-4.364c0.008,-0.005 0.547,-0.397 1.449,-0.45'
          stroke='#fff'
        ></path>
        <path
          d='M4.098,1.091c1.178,-0.074 2.354,0.508 2.985,1.6c0.887,1.536 0.359,3.503 -1.177,4.39c-1.535,0.886 -3.502,0.36 -4.389,-1.176c-0.878,-1.522 -0.37,-3.466 1.132,-4.364c0.008,-0.005 0.547,-0.397 1.449,-0.45'
          stroke='#c13c3c'
        ></path>
        <path
          d='M4.556,2.287l-0.038,2.847l-0.449,0l-0.039,-2.847l0.526,0Zm-0.263,3.992c-0.095,0 -0.177,-0.034 -0.245,-0.103c-0.069,-0.068 -0.103,-0.15 -0.103,-0.245c0,-0.096 0.034,-0.178 0.103,-0.246c0.068,-0.068 0.15,-0.102 0.245,-0.102c0.096,0 0.178,0.034 0.246,0.102c0.068,0.068 0.102,0.15 0.102,0.246c0,0.095 -0.034,0.177 -0.102,0.245c-0.068,0.069 -0.15,0.103 -0.246,0.103Z'
          fill='#fff'
        />
      </svg>
      <p>No Data To Display</p>
    </div>
  );
}

export default NoData;
