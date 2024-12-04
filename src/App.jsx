import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts";
import { AuthProvider } from "./Context/AuthContext.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
//Routes
import Login from "./Routes/Login.jsx";
import Registrar from "./Routes/Register.jsx";
import Home from "./Routes/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <main className="flex flex-col justify-between h-svh font-HachiMaruPopfamily">
          <img src="/fondo.png" alt="fondo" className=" absolute -z-20" />
          <Header />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registrar />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Home/:estado" element={<Home />} />
            </Route>
          </Routes>
          <Footer/>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
