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

  const onSubmit = async ({ email, password }) => {
    setError(null);

    try {
      const {
        data: { token }
      } = await AuthService.register({ email, password });

      login(token);
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <h1>Registarse</h1>
      <Link to="/login">Ingresar</Link>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          className="input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <p>
          {errors.email?.type === "required" && <span>Campo obligatorio</span>}
        </p>
        <p>{errors.email?.type === "pattern" && <span>Email inválido</span>}</p>

        <label>Contraseña</label>
        <input
          className="input"
          type="password"
          {...register("password", { required: true })}
        />
        <p>
          {errors.password?.type === "required" && (
            <span>Campo obligatorio</span>
          )}
        </p>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
