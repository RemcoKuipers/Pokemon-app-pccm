import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home.jsx';
import CardDetail from "./pages/Carddetail/CardDetail.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";


function App() {


    return (
        <>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/card/:id" element={<CardDetail />}/>
                </Routes>
            </main>
        </>
    );
}

export default App
