import React from 'react';


function PopupWithForm({isOpen, name, title, onClose, children, onSubmit}) {

 


  return (
    <div className={`popup popup_ ${isOpen ? 'popup_opened' : ''}`} id={`${name}Popup`}>
      <div className={`popup__content popup__content_${name}`}>
        <button type="button"className="popup__close" onClick={onClose}/>
        <h2 className="popup__header">{title}</h2>
        <form action="#" onSubmit={onSubmit} className="form" id={`${name}Form`} data-form={name} method="get" noValidate>
          {children}
        </form>
      </div>
    </div>
  )
}


export default PopupWithForm;