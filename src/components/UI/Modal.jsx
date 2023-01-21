import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import  classes from './Modal.module.css';

const BackDrop=(props)=>{
    return (
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
}

const ModalOverLay=(props)=>{
    return  (
        <div className={classes.modal}>
        <div className={classes.content}> {props.children} </div>

        </div>
    )
}
const portalElememt = document.getElementById('overlays');
const Modal =(props)=>{
    return  <div>
       {ReactDom.createPortal(<BackDrop onClick={props.onClick}/>,portalElememt)}
       {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElememt)}

       </div>
    
}
export default Modal;