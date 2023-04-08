import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import MainRoutes from "./pages/MainRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes/>
    </div>
  );
}

export default App;
