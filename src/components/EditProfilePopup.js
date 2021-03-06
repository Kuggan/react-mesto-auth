import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm name="edit"
                   title="Редактировать профиль"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}>
      
        <input className="popup__input popup__input_enter_name"
               type="text"
               name="name"
               placeholder="Ваше имя"
               minLength="2"
               maxLength="40"
               required 
               id="name-input"
               value={name}
               onChange={handleChangeName}/>
        <span className="error"
              id="name-input-error"/>
      
     
        <input className="popup__input popup__input_enter_description"
               type="text"
               name="about"
               placeholder="Ваша профессия"
               minLength="2"
               maxLength="200"
               required
               id="about-input"
               value={description}
               onChange={handleChangeDescription}/>
        <span className="error"
              id="about-input-error"/>
      
      <input className="popup__submit popup__submit_description"
             type="submit"
             name="submit"
             disabled={isLoading}
             value={`${isLoading ? 'Сохранение...' : 'Сохранить'}`}/>
    </PopupWithForm>
  );
}

export default EditProfilePopup;