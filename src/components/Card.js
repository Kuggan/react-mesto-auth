import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({link, name, alt, _id, likes, owner, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    onCardClick({src: link, title: name, alt: alt});
  }

  function handleLikeClick() {
    onCardLike({likes: likes, _id: _id});
  }

  function handleDeleteClick() {
    onCardDelete({_id: _id});
  }

  return (
    <article className="element">
      <img className="element__image"
           src={link}
           alt={alt}
           id={_id}
           onClick={handleClick}
          />
      <button type="button"
              className={`element__delete ${isOwn ? 'element__delete' : 'element__delete_disabled'}`}
              onClick={handleDeleteClick}/>
      <div className="element__box">
        <h2 className="element__title">{name}</h2>
        <div className="element__hearts">
          <button type="button"
                  className={`element__heart ${isLiked ? 'element__heart_active' : ' '}`}
                  onClick={handleLikeClick}/>
          <p className="element__counter">{likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;