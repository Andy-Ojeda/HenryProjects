import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";
import style from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const user = await dispatch(authenticateUser({ email, password }));

      // Si el inicio de sesión fue exitoso, navegar a la página de inicio
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className={style.yellow}>
    <div className={style.container}>
      
      <input
      className={style.input}
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className={style.input}
        placeholder="Contraseña"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span
            className={style.toggle}
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
      <button className={style.boton} onClick={handleLogin} disabled={!isFormValid}>Ingresar</button>
    </div>
    </div>
  );
};

export default Login;
