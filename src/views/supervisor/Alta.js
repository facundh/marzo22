import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import styles from './form.module.css'

const Alta = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      Nombre: "",
      Apellido: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form__container}`}>
        <Controller
          name="Nombre"
          control={control}
          render={({ field }) => <Input {...field} />}
          className={`${styles.item__container}`}
        />
        <Controller
          name="Apellido"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "Rider", label: "Rider" },
                { value: "Shift", label: "ShiftLead" },
              ]}
            />
          )}
        />
        <input type="submit" className={`${styles.button}`} />
      </form>
    </div>
  );
};

export default Alta;
