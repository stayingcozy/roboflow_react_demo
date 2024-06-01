import "./App.css";
import Roboflow from "./components/roboflow.js";

export default function App() {
  return (
    <main className="max-w-2xl mx-auto">
      Roboflow 🦝 + React ⚛️
      <div className="w-full h-full">
        <Roboflow modelName="dog-emotions" modelVersion="3" />
      </div>
    </main>
  )
}

