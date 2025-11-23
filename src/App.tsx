import React from 'react';
import './App.scss';
import './styles/global.scss'
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Contact from './components/sections/Contact/Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="app-body">
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;
