import './App.css';
import Header from 'pages/Header';
import GeneralPurpose from 'pages/GeneralPurpose';
import Projects from 'pages/Projects';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TechStack from 'pages/TechStack';
import Footer from 'pages/Footer';
import backImage from 'assets/HeroBack.jpg';
import Team from 'pages/Team';
import Mission from 'pages/Mission';

const App = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center">
            <Header />
            <GeneralPurpose />
            <Projects />
            <Mission />
            <Team />
            <TechStack />

            <Footer />
        </div>
    );
};

export default App;
