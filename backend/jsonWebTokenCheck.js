const jwt = require('jsonwebtoken');

const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxZmJlZDYzOTBhNDAwMTQ2OTk4MDUiLCJpYXQiOjE2NjQyMjQ3Mzd9.2FOhEDIcUa3DK4DhKTUyqniaveP59QKdmqnaHFymtrw'; // вставьте сюда JWT, который вернул публичный сервер
// const SECRET_KEY_DEV = 'fb42b56fe6312a9911550a4f69cf239a2982d93e17859f48eb723b971122a086';
const SECRET_KEY_DEV = 'dev-secret'; // вставьте сюда секретный ключ для разработки из кода
try {
  jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
  console.log(
    '\x1b[31m%s\x1b[0m',
    `
  Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`,
  );
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',
    );
  } else {
    console.log('\x1b[33m%s\x1b[0m', 'Что-то не так', err);
  }
}
