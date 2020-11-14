import React from 'react';
import {Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock } from '@fortawesome/free-solid-svg-icons'
import Button from "../form/button"
import {Link} from "react-router-dom"


function modal(props){


    return(
      <>

        <Modal {...props} >
        <Modal.Header closeButton  className="alert-danger">
        <Modal.Title><h4 className="lead">{props.message}<FontAwesomeIcon icon={faLock}></FontAwesomeIcon></h4></Modal.Title>
        </Modal.Header>
        {(props.confirm)?<Modal.Body className="alert-info">
        <h4 className="lead">{props.confirm}</h4>
        {props.type==='link'?<Link to='/' onClick={props.handleButton} className={props.button_class}>{props.button_message}</Link>:
        <Button value_name = {props.button_message} onClick={props.handleButton} className={props.button_class} />}
        </Modal.Body>:<></>}
        
      </Modal>
      </>
    );
}




export default (modal);
