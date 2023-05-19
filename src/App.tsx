import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
