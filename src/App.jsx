import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import WhatsAppButton from "./ui/WhatsAppButton";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Contact from "./screens/Contact";
import ProfileCard from "./ui/Card"; // 👈 IMPORTANTE

function App() {
  return (
    <BrowserRouter>
      <NavBar brand="DevMarket" />

      <Routes>
        <Route
          path="/"
          element={
            <main className="flex min-h-screen flex-wrap items-center justify-center gap-8 p-8">
              <ProfileCard
                variant="classic"
                name="maluma"
                description="y yo no quiero ni saber tu nombre..."
                followers={312}
                posts={48}
                imageSrc="/img/maluma.jpg"
                verified
              />

              <ProfileCard
                variant="expanded"
                name="prettyboy"
                description="Y dime que me amas aunque sea mentira..."
                followers={312}
                posts={48}
                imageSrc="/img/maluma.jpg"
                verified
              />

              <ProfileCard
                variant="overlay"
                name="dirty boy"
                description="Ayer me besaste y no podías parar..."
                followers={312}
                posts={48}
                imageSrc="/img/maluma.jpg"
                verified
              />
            </main>
          }
        />

        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsAppButton
        phoneNumber="+1234567890"
        message="Hola, estoy interesado en sus productos."
      />
    </BrowserRouter>
  );
}

export default App;
