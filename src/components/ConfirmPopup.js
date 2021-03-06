import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({onClose, isOpen, onCardDelete, isLoading}) {

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete();
  }

  return(
    <PopupWithForm
      name="question"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input type="submit"
             className="popup__submit popup__submit_question"
             disabled={isLoading}
             value={`${isLoading ? 'Удаление...' : 'Да'}`}/>
    </PopupWithForm>
  );
}
export default ConfirmPopup;

