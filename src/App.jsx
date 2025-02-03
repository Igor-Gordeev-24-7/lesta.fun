import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes"; // Импорт вашего компонента с маршрутизацией

function App() {
  return (
    <BrowserRouter>
      <Routes /> {/* Рендеринг маршрутов */}
    </BrowserRouter>
  );
}

export default App;
