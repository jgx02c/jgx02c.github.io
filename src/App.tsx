import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.module.scss';
import { NavHeader } from './components/nav-header/nav-header';
import  ParticlesBackground  from './ParticlesBackground';

import  ContactPage  from "./pages/ContactPage";
import   HomePage  from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
          
                 <NavHeader />
                    <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/contact' element={<ContactPage />}/>
                    <Route path='/projects' element={<ProjectsPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
