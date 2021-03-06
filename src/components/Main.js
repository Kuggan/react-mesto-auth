import React from 'react';
import Card from '../components/Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__box">
          <div type="button"
             className="profile__overlay"
             data-button="editAvatar"
             onClick={props.onEditAvatar}>
             <img src={currentUser.avatar} 
             alt="аватар_пользователя"
             className="profile__avatar"/> 
          </div>
          <div className="profile__info">
            <h1 className="profile__title"
             id={currentUser._id ? currentUser._id : ''}>{currentUser.name}
            </h1>
            <button type="button"
             className="profile__button-edit"
             data-button="edit"
             onClick={props.onEditProfile}/>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button type="button"
             className="profile__button-add"
             data-button="add"
             onClick={props.onAddPlace}/>
        </div>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card key={card._id}{...card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}/>))}
      </section>
    </main>
  );
}

export default Main;