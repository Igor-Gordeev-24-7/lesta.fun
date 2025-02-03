import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes"; // Импорт маршрутов

function App() {
  return (
    <BrowserRouter>
      <Routes /> {/* Оборачиваем только один раз */}
    </BrowserRouter>
  );
}

export default App;
