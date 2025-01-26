import './App.css';
import Header from 'pages/Header';
import GeneralPurpose from 'pages/GeneralPurpose';
import Projects from 'pages/Projects';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TechStack from 'pages/TechStack';
import Footer from 'pages/Footer';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <Header />
            <GeneralPurpose />
            <Projects />
            <TechStack />

            <Footer />
        </div>
    );
};

export default App;
