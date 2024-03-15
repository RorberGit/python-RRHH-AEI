import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Actions } from "./views";
import { Layout } from "./components";
import { Dashboard } from "./views/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="action" element={<Actions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
