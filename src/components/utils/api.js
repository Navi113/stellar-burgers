const config = {
  baseURL: 'https://norma.nomoreparties.space/api/ingredients ',
  headers: {
    'Content-Type': 'application/json'
  }
}

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Ошибка: ${res.status}`);
};

// const fecthData = () => {
//   return fetch(config.baseURL)
//   .then(checkRes)
// };

function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkRes)
}

export {request ,config};