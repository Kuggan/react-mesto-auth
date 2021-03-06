class Api {
    constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
    }
    _handleOriginalRes(res) {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    }
      
    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._handleOriginalRes);
    }
    renewUserInfo({name, about}) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        }),
      }).then(this._handleOriginalRes);
    }
    renewUserAvatar(avatar) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ avatar: avatar }),
      }).then(this._handleOriginalRes);

      
    }
    getInitialCards() {
      return fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._handleOriginalRes);
    }
  
    createNewCard({name, link}) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({ name: name, link: link }),
      }).then(this._handleOriginalRes);
    }

    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(this._handleOriginalRes);
    }


    likeCard(cardId, isLiked) {
       let method = '';
       if(!isLiked){
         method ='DELETE';
       } else{
         method = 'PUT';
       }

      return fetch(`${this._url}/cards/likes/${cardId}`, {
        method: method,
        headers: this._headers,
        body : JSON.stringify({
          _id: cardId
        })
      }).then(this._handleOriginalRes);
    }
  }

  const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-19',
    headers: {
      authorization: '92a26d6c-40ed-4aca-ae57-01c4984e9943',
      'Content-Type': 'application/json',
    },
  });
   
  export default api;
  