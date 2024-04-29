import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Empleados } from "./pages";
import { Layout } from "./components";
import { Dashboard } from "./pages/dashboard";
import { Suspense } from "react";
import Usuarios from "./pages/usuarios";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="users/*"
            element={
              <Suspense fallback={<>...Cargando</>}>
                <Usuarios />
              </Suspense>
            }
          />
          <Route
            path="employee/*"
            element={
              <Suspense fallback={<>...Cargando</>}>
                <Empleados />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
