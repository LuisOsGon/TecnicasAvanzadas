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
    <div>
      <h1>Login</h1>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          className="input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email?.type === "required" && <span>Campo obligatorio</span>}
        {errors.email?.type === "pattern" && <span>Email inválido</span>}

        <label>Contraseña</label>
        <input
          className="input"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && <span>Campo obligatorio</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
