import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

import RoomsService from "../services/rooms";
import { useChat } from "../context/ChatContext";

function CreateRoom() {
  const { fetchRooms } = useChat();
  const [error, setError] = React.useState(null);
  const [roomCreated, setRoomCreated] = React.useState();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ name, description }) => {
    setError(null);

    try {
      RoomsService.createRoom({ name, description })
        .then(
          ({
            data: {
              room: { _id }
            }
          }) => {
            fetchRooms();
            setRoomCreated(_id);
          }
        )
        .catch((err) => console.warn(err));
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      }
    }
  };

  if (roomCreated) {
    return <Redirect to={`/room/${roomCreated}`} />;
  }

  return (
    <div className="col-12 col-md-12">
      <div className="contenedor-div">
        <h1>Crear sala</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label-class">Nombre</label>
          <input
            className="input redondeadonorelieve"
            {...register("name", { required: true })}
          />
          <p>
            {errors.name?.type === "required" && <span>Campo obligatorio</span>}
          </p>

          <label className="label-class">Descripción</label>
          <input
            className="input redondeadonorelieve"
            type="text"
            {...register("description", { required: true })}
          />
          <p>
            {errors.description?.type === "required" && (
              <span>Campo obligatorio</span>
            )}
          </p>

          <button type="submit" className="btn-class">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateRoom;
