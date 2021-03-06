import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoading}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm name="add"
                   title="Новое место"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleAddPlaceSubmit}>
     
        <input className="popup__input popup__input_type_name"
               type="text"
               name="name"
               placeholder="Название"
               minLength="2"
               maxLength="30"
               required 
               id="title-input"
               value={name}
               onChange={handleChangeName}/>
        <span className="error"
              id="title-input-error"/>
      
      
        <input className="popup__input popup__input_type_link"
               type="url"
               name="link"
               placeholder="Ссылка на картинку"
               required
               id="link-input"
               value={link}
               onChange={handleChangeLink}/>
        <span className="error"
              id="link-input-error"/>
     
      <input className="popup__submit popup__submit_add-card"
             type="submit"
             name="submit"
             disabled={isLoading}
             value={`${isLoading ? 'Сохранение...' : 'Создать'}`}
             />
    </PopupWithForm>
  );
}

export default AddPlacePopup;