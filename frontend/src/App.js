import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { Route, Routes} from "react-router-dom"
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen/CreateNoteScreen";
import UpdateNoteScreen from "./screens/UpdateNoteScreen/UpdateNoteScreen";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/register" element={<RegisterScreen/>} exact />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/note/:id" element={<UpdateNoteScreen/>} />
          <Route path="/createnote" element={<CreateNoteScreen/>} exact />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
