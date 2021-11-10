import * as React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthService from "../services/auth";

function Register() {
  const { login } = useAuth();
  const [error, setError] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ email, username, password }) => {
    setError(null);

    try {
      const {
        data: { token }
      } = await AuthService.register({ email, username, password });

      login(token);
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="contenedor-div">
      <h1>Registarse</h1>
      <Link to="/login">Ingresar</Link>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label-class">Email</label>
        <input
          className="input redondeadonorelieve"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <p>
          {errors.email?.type === "required" && <span>Campo obligatorio</span>}
        </p>
        <p>{errors.email?.type === "pattern" && <span>Email inválido</span>}</p>

        <label className="label-class">Nombre de Usuario</label>
        <input
          className="input redondeadonorelieve"
          {...register("username", { required: true })}
        />
        <p>
          {errors.email?.type === "required" && <span>Campo obligatorio</span>}
        </p>

        <label className="label-class">Contraseña</label>
        <input
          className="input redondeadonorelieve"
          type="password"
          {...register("password", { required: true })}
        />
        <p>
          {errors.password?.type === "required" && (
            <span>Campo obligatorio</span>
          )}
        </p>

        <input type="submit" className="btn-class" />
      </form>
    </div>
  );
}

export default Register;
