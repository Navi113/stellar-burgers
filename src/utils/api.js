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

function request(url, options) {
  return fetch(url, options)
    .then(checkRes)
}

export {
  request,
  config
};