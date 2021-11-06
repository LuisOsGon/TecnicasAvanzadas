import * as React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthService from "../services/auth";

function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    setError(null);
    setLoading(true);
		
    try {
      const {
        data: { token }
      } = await AuthService.login({ email, password });

      login(token);
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="contenedor-div">
			<div>
				<h1>Bienvenido a Chat.IO !!!</h1>	
			</div>
			<div>
				<h1>Inicio de sesión</h1>
				{error ? <div style={{ color: "red" }}>{error}</div> : null}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="col-md-3"></div>
					<label className="label-class">Email</label>
					<input
						className="input redondeadonorelieve"
						{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
					/>
					{errors.email?.type === "required" && <span>Campo obligatorio</span>}
					{errors.email?.type === "pattern" && <span>Email inválido</span>}

					<label className="label-class">Contraseña</label>
					<input
						className="input redondeadonorelieve"
						type="password"
						{...register("password", { required: true })}
					/>
					{errors.password?.type === "required" && <span>Campo obligatorio</span>}

					<input className="btn-class" type="submit" />
				</form>
			</div>      
    </div>
  );
}

export default Login;
