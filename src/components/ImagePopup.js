import React from 'react';

function ImagePopup({isOpen, card, onClose}){
    return(
      <div className={`popup popup_ ${isOpen ? 'popup_opened' : ''}`} id="imgPopup">
        <div className="popup__content popup__content_image">
          <img className="popup__image" src={`${card ? card.src : '#'}`} alt={`${card ? card.alt : '#'}`} />
          <h3 className="popup__caption">{card ? card.title : '#'}</h3>
          <button type="button" className="popup__close" aria-label= "Закрыть" onClick = {onClose} />     
        </div>
      </div>
    );
}

export default ImagePopup;