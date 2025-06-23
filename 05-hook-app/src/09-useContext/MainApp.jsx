import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>
        {
            /* Esto hace un refresh de la pagina
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
            */
        }

        
            {/** Esto no hace un refresh de la pagina **/}
            {/*
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            */}

        <Navbar/>

        <hr />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="login" element={<LoginPage/>} />
            {/*<Route path="/*" element={<LoginPage/>} />*/}
            <Route path="/*" element={<Navigate to="/login"/>} />
        </Routes>
    </UserProvider>
  )
}
