import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../Redux/Slice/LoginSlice";
import { useNavigate } from "react-router-dom";
import style from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
      <h2>Login:</h2>
      <input
      className={style.input}
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className={style.input}
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={style.boton} onClick={handleLogin} disabled={!isFormValid}>Ingresar</button>
    </div>
    </div>
  );
};

export default Login;
