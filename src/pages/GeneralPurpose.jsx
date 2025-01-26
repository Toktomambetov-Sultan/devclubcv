import { Container } from '@/components/ui/container';

import backImage from 'assets/HeroBack.jpg';

const GeneralPurpose = () => {
    return (
        <div
            id="home"
            className="h-svh w-full"
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(${backImage})`,
            }}
        >
            <Container variant="fullMobileConstrainedPadded" className="h-full">
                <div className="max-w-6xl z-10  h-full">
                    <h1
                        className="text-8xl pt-[200px] text-white uppercase"
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                        }}
                    >
                        Reaching for <br /> the stars <br /> with
                        <br />
                        <span className="text-green-600">Innovations</span>
                    </h1>
                </div>
            </Container>
        </div>
    );
};

export default GeneralPurpose;
