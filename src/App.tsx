import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { clarity } from 'react-microsoft-clarity';
import { useEffect } from 'react';
import { NavHeader } from './components/nav-header/nav-header';
import { NavFooter } from './components/nav-footer/nav-footer';

import WorkPage from "./pages/WorkPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    useEffect(() => {
        clarity.init('qmqw6gnm3f');
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <NavHeader />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/work' element={<WorkPage />} />
                    <Route path='/projects' element={<ProjectsPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
            </main>
            <NavFooter />
        </BrowserRouter>
    );
}

export default App;
