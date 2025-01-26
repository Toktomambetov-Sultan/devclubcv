import { Container } from '@/components/ui/container';

import androidIcon from 'assets/Android.png';
import DjIcon from 'assets/Dj.png';
import FigmaIcon from 'assets/figma.png';
import FlutterIcon from 'assets/flutter.png';
import iosIcon from 'assets/Ios.png';
import reactIcon from 'assets/react.png';
import pythonIcon from 'assets/Python.png';
import JavaScriptIcon from 'assets/javascript.png';
import firebaseIcon from 'assets/firebase.png';
import dockerIcon from 'assets/docker.png';

const TechStack = () => {
    return (
        <div id="stack" className="w-full bg-white pb-16">
            <Container variant="fullMobileConstrainedPadded" className="h-full">
                <div className="max-w-6xl z-10 h-full">
                    <h3
                        className="text-6xl pt-20 pb-20 text-black uppercase"
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                        }}
                    >
                        Technology stack
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center p-16 bg-gray-500 rounded-full w-[80%] mx-auto">
                        <img src={pythonIcon} alt="Python" className="w-10 h-10" />
                        <img src={firebaseIcon} alt="firebase" className="w-10 h-10" />
                        <img src={DjIcon} alt="Django" className="w-10 h-10" />
                        <img src={FlutterIcon} alt="Flutter" className="w-10 h-10" />
                        <img src={reactIcon} alt="React" className="w-10 h-10" />
                        <img src={JavaScriptIcon} alt="JavaScript" className="w-10 h-10" />
                        <img src={dockerIcon} alt="Docker" className="w-10 h-10" />
                        <img src={FigmaIcon} alt="Figma" className="w-10 h-10" />
                        <img src={iosIcon} alt="iOS" className="w-10 h-10" />
                        <img src={androidIcon} alt="Android" className="w-10 h-10" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TechStack;
