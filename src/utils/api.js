const config = {
  baseURL: 'https://norma.nomoreparties.space/api/',
  headers: {
    'Content-Type': 'application/json'
  }
}

const fetchIngredients = () => {
  return fetch(`${config.baseURL}ingredients`, config.headers)
    .then(checkRes)
};

const postOrder = (ingredientsId) => {
  return fetch(`${config.baseURL}orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: ingredientsId
      })
    })
    .then(checkRes)
};

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export {
  fetchIngredients,
  postOrder
};
