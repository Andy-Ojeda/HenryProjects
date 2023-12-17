const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[a-zA-Z0-9]{5,8}$/;

const validate = (formData) => {
  const errors = {};

  if (!formData.email) errors.email = "Por favor, ingrese su correo electrónico";
  else if (!emailRegex.test(formData.email))
    errors.email = "Por favor, ingrese un correo electrónico válido";

  if (!formData.password) errors.password = "Por favor, ingrese su contraseña";
  else if (!passwordRegex.test(formData.password))
    errors.password = "La contraseña debe tener entre 5 y 8 caracteres";

  return errors;
};

export default validate;
