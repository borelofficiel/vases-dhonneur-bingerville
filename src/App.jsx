// Import des routes
import { Routes, Route } from "react-router-dom";

// Import des composants
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import des pages
import Accueil from "./pages/Accueil";
// import Annonce from "./pages/Annonce";
// import NosEglises from "./pages/NosEglises";
// import Dimes from "./pages/Dimes";
// import Connexion from "./pages/Connexion";

function App() {
  return (
    <>
      {/* Navbar affichée sur toutes les pages */}
      <Navbar />

      {/* Gestion des pages */}
      <Routes>
        <Route path="/" element={<Accueil />} />

        {/*
        <Route path="/annonce" element={<Annonce />} />
        <Route path="/eglises" element={<NosEglises />} />
        <Route path="/dimes" element={<Dimes />} />
        <Route path="/connexion" element={<Connexion />} />
        */}
      </Routes>

      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </>
  );
}

export default App;
