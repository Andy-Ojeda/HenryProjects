import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validate from "./Validate";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const user = await dispatch(
        authenticateUser({
          email: formData.email,
          password: formData.password,
        })
      );

      // Si el inicio de sesión fue exitoso, navegar a la página de inicio
      if (user.payload.access === true) {
        navigate("/home");
      } else {
        alert("Por favor registrese para ingresar");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const isFormValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors(validate({ ...formData, [name]: value }));
  };

  return (
    <div className={style.yellow}>
     <div className={style.container}>
        <input
          className={style.input}
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.email && <span className={style.errorE}> {errors.email} </span>}
        <input
          className={style.input}
          placeholder="Contraseña"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && (
          <span className={style.errorP}> {errors.password} </span>
        )}
        <span className={style.toggle} onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </span>
        <button
          className={style.boton}
          onClick={handleLogin}
          disabled={!isFormValid}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
