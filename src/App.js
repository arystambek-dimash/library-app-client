import {React} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css'
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import 'react-notifications/lib/notifications.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route index element={<MainPage/>}/>
                    </Route>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;