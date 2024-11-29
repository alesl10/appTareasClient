import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts";
import { AuthProvider } from "./Context/AuthContext.jsx";
//Routes
import Login from "./Routes/Login.jsx";
import Registrar from "./Routes/Register.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registrar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
