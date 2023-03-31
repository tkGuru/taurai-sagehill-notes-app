import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Notes from "./pages/Notes";
import AddNotes from "./pages/AddNotes";
import EditNotes from "./pages/EditNotes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />     
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/add" element={<AddNotes />} />
          <Route path="/notes/edit/:id" element={<EditNotes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
