import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/LoginPage";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import VisitsPage from "./pages/VisitsPage";
import SettingsPage from "./pages/Settings";
import VisitorsPage from "./pages/VisitorsPage";
import AddVisitor from "./pages/AddVisitor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admindashboard" element={<Dashboard />} />
          <Route exact path="/visits" element={<VisitsPage />} />
          <Route exact path="/settings" element={<SettingsPage />} />
          <Route exact path="/visitors" element={<VisitorsPage />} />
          <Route exact path="/addvisitor" element={<AddVisitor />} />

          {/* <Route exact path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
