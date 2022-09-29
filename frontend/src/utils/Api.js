class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  // "res" в парамете - это значит "response"
  _ringingServer(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Возникла ошибка ${res.status} : ${res.statusText}`);
  }

  getUserInfo() {
    return fetch(
      `${this._url}/users/me`,
      {
        method: "GET",
        headers: this._headers,
        credentials: "include",
      })
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  setUserInfo({ name, about }) {
    return fetch(
      `${this._url}/users/me`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name,
          about,
        }),
        credentials: "include",
      })
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  setUserAvatar(link) {
    return fetch(
      `${this._url}/users/me/avatar`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: link.avatar,
        }),
        credentials: "include",
      })
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  getInitialCards() {
    return fetch(
      `${this._url}/cards`,
      {
        method: "GET",
        headers: this._headers,
        credentials: "include",
      })
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  addNewCard(data) {
    return fetch(
      `${this._url}/cards`,
      {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
        credentials: "include",
      })
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  removeCard(cardId) {
    return fetch(
      `${this._url}/cards/${cardId}`,
      {
        method: "DELETE",
        headers: this._headers,
        credentials: "include",
      },
    )
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  setLikeCard(cardId) {
    return fetch(
      `${this._url}/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: this._headers,
        credentials: "include",
      })
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  deleteLikeCard(cardId) {
    return fetch(
      `${this._url}/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: this._headers,
        credentials: "include",
      })
      .then((res) => this._ringingServer(res))
      .then((result) => {
        return result;
      });
  }

  // В прошлой работе Mesto было обисано
  // иное решение (в index.js), но более объемное
  toggleLikeCard(cardId, isLiked) {
    if (!isLiked) {
      return this.setLikeCard(cardId);
    } else {
      return this.deleteLikeCard(cardId);
    }
  }
}

const api = new Api({
  url: "http://api.show-me.nomorepartiesxyz.ru",
  // url: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
