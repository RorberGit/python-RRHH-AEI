import { Route, Routes } from "react-router-dom";
import Listado from "./Listado";
import Formulario from "./Fornulario";

export default function Empleados() {
  return (
    <>
      <Routes>
        <Route path="listing" element={<Listado />} />
        <Route path="create" element={<Formulario />} />
      </Routes>
    </>
  );
}
