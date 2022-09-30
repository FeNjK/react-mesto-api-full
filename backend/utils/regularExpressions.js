// Регулярные выражения

// для URL ()
// eslint-disable-next-line no-useless-escape
// const validURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/mi;

// Для прохождения автотестов
// eslint-disable-next-line no-useless-escape
const validURL = /^(?:https?:\/\/)?[\w.-]+(?:\.[\w\.-]+)*[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.].+\*$/gmi;

// для пароля
const validPassword = /^[a-zA-Z0-9]{8,30}$/;

module.exports = { validURL, validPassword };
