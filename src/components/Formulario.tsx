import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { formulario, handleChange } = useForm<FormData>({
    email: " ",
    nombre: "seae",
    edad: 21,
  });

  return (
    <form action="">
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formulario.email}
        />
      </div>
      <div className="form-input">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          value={formulario.nombre}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
