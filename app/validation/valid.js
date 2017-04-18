import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors ='';

  if (Validator.isNull(data.username)) {
    errors = 'This field is required';
  }

  if (Validator.isNull(data.password)) {
    errors = 'This field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
