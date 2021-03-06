import React from 'react';
import success from '../images/info-tool-tip-success.svg';
import failure from '../images/info-tool-tip-failure.svg';

function InfoTooltip({ onClose, isOpen, isSuccess }) {

  return (
    <div className={`popup popup_ ${isOpen ? 'popup_opened' : ''}`} id={'infoTooltipPopup'}>
      <div className={`popup__content popup__content_infoTooltip`}>
        <button type="button" className="popup__close" onClick={onClose}/>
        <img src={isSuccess ? success : failure}
             alt={isSuccess ? "Успешная регистрация." : "Ошибка при регистрации"}
             className="popup__image_infoTooltip"/>
        <h2 className="popup__header_infoTooltip">
          {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
