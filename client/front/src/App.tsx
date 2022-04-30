import React from "react";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import AddButton from "./components/AddButton/AddButton";
import VideoArea from "./components/VideoArea/VideoArea";
function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <VideoArea />
      <AddButton />
      <Footer />
    </div>
  );
}

export default App;
