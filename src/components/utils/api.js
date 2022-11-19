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

const fecthData = () => {
  return fetch(config.baseURL)
  .then(checkRes)
};

export {fecthData};