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
                    <Route path="/" component={Home}/>
                    <Route path="/card/:id" component={CardDetail}/>
                </Routes>
            </main>
        </>
    );
}

export default App
