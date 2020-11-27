import React from 'react';
import './success.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Success(props) {
  return (
    <>
      <div class='success-container'>
        <div class='row'>
          <div class='modalbox success col-sm-8 col-md-6 col-lg-5 center animate'>
            <div class='icon'>
              <span class='glyphicon glyphicon-ok'>
                <FontAwesomeIcon icon={faCheck} className='icon3' />
              </span>
            </div>
            <h1>Success!</h1>
            <p>{props.success_message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
