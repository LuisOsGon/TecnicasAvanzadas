import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthService from "../services/auth";
import RoomsService from "../services/rooms";


function Lobby() {
	const [rooms, setRooms] = React.useState([]);
	const { login } = useAuth();
  const [error, setError] = React.useState(null);

	useEffect(() => {
    RoomsService.fetchRooms()
      .then((response) => {
        const { rooms } = response.data;
        setRooms(rooms);
      })
      .catch((err) => console.warn(err));
  }, []);

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
      } = await AuthService.login({ email, password });

      login(token);
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      }
    }
  };

  return (
  <div className="col-12 col-md-12">
    <div className="col-12 col-md-6 NavRooms">
			<h1>Lista de salas</h1>
			<nav className="RoomNav">
        {rooms.length > 0
          ? rooms.map((room) => (
              <Link key={room._id} to={`/room/${room._id}`}>
                #{room.name}
              </Link>
            ))
          : null}
      </nav>
		</div>
		<div className="col-12 col-md-6">
		  <div className="contenedor-div">
				<h1>Crear sala</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label className="label-class">Nombre</label>
					<input
						className="input redondeadonorelieve"
						{...register("Nombre", { required: true, pattern: /^\S+@\S+$/i })}
					/>
					<p>
						{errors.email?.type === "required" && <span>Campo obligatorio</span>}
					</p>
					<p>{errors.email?.type === "pattern" && <span>Email inválido</span>}</p>

					<label className="label-class">Descripción</label>
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
		</div>
  </div>);
}

export default Lobby;
