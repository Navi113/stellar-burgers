import PropTypes from 'prop-types';

const ingredientType = {
  image: PropTypes.string.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  discription: PropTypes.string.isRequired,
};

export default ingredientType;