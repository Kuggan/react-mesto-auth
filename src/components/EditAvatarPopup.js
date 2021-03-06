import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoading}) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm name="avatar"
                   title="Обновить аватар"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}>
      
        <input className="popup__input popup__input_type_avatar"
               type="url"
               name="avatar"
               placeholder="Ссылка на картинку"
               required
               id="avatar-link"
               ref={avatarRef}/>
        <span className="error"
              id="avatar-link-error"/>
      
      <input className="popup__submit popup__submit_description"
             type="submit"
             name="submit"
             disabled={isLoading}
             value={`${isLoading ? 'Сохранение...' : 'Сохранить'}`}/>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;