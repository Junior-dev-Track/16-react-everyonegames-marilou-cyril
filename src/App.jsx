import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Games from './pages/Games.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;