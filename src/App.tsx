import { BrowserRouter, Routes, Route } from "react-router-dom";
import { clarity } from 'react-microsoft-clarity';
import { useEffect } from 'react';
import styles from './App.module.scss';
import { NavHeader } from './components/nav-header/nav-header';

import WorkPage from "./pages/WorkPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    useEffect(() => {
        clarity.init('qmqw6gnm3f');
    }, []);

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <NavHeader />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/work' element={<WorkPage />}/>
                    <Route path='/projects' element={<ProjectsPage />}/>
                    <Route path='/contact' element={<ContactPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
