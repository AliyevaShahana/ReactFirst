import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainBtn from "./component/button";
import Header from "./layout/header";
import Footer from "./layout/footer";
import MainSection from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
