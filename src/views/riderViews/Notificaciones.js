import React, { useState } from "react";
import { useForm } from "react-hook-form";
import  styles from '../supervisor/form.module.css'

const Notificaciones = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className={`${styles.container}`}>
      <form  className={`${styles.form__container}`} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input {...register("firstName")} placeholder="Nombre" className={`${styles.item__container}`} />

        <textarea {...register("reporte")} placeholder="Reporte - Incidencia" />
        <p>{data}</p>
        <input type="submit"  className={`${styles.button}`} />
      </form>
    </div>
  );
};

export default Notificaciones;
