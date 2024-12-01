import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts";
import { AuthProvider } from "./Context/AuthContext.jsx";
//Routes
import Login from "./Routes/Login.jsx";
import Registrar from "./Routes/Register.jsx";
import Home from "./Routes/Home.jsx";
import Header from "./Components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <main className="flex flex-col justify-between h-svh">
          <Header />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registrar />} />
              <Route path="/Home" element={<Home />} />
            </Route>
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
